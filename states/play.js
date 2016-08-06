var template = {
    "height": 20,
    "layers": [{
        "data": [],
        "height": 20,
        "name": "Layer1",
        "opacity": 1,
        "type": "tilelayer",
        "visible": true,
        "width": 20,
        "x": 0,
        "y": 0
    }],
    "nextobjectid": 1,
    "orientation": "orthogonal",
    "renderorder": "right-down",
    "tileheight": 32,
    "tilesets": [{
        "columns": 3,
        "firstgid": 1,
        "image": "tilesheet.png",
        "imageheight": 96,
        "imagewidth": 96,
        "margin": 0,
        "name": "tilesheet",
        "spacing": 0,
        "tilecount": 9,
        "tileheight": 32,
        "tilewidth": 32
    }],
    "tilewidth": 32,
    "version": 1,
    "width": 20
}

//global Vars
var bob = null;
var indicator = null;
var moving = null;
//var indicator.x = 0;
//var indicator.y = 0;
var diffX = 0;
var diffY = 0;
var map_data = {};
var mouseclick = false;
var canmove = true;
var restore = false;
function generateCollisionData() {
    mapdata = Play.maps[Play.cmap]['data']
    for(var i = 0; i < mapdata.length; i++) {
    var data = mapdata[i];
    var temp = [];
        for(var j = 0; j < data.length; j++) {
            if(mapdata[j][i] > 3 && mapdata[j][i] != 7 && mapdata[j][i] != 9) {
                temp[j] = 1;
               //Play.maps[Play.cmap]['collisiondata'][i,j] = 1;
                //collision_data[i,j] = 1;
            }
            else {
                temp[j] = 0;
                //Play.maps[Play.cmap]['collisiondata'][i,j] = 0;
                //collision_data[i,j] = 0;
            }
        }
        Play.maps[Play.cmap]['collisiondata'].push(temp);
    }
}

function generateSkeleton() { //don't say swears
    Play.maps[Play.cmap]['data'] = generate();
    generateCollisionData();
    monsters = Play.maps[Play.cmap]['monsters']

    for (i = 0; i < generateN(2, 7); i++) {//adds monster prototypes
        monsters.push({ "x": 0, "y": 0, "type": 0, "fought": false });
    }

    for (i = 0; i < Play.maps[Play.cmap]['monsters'].length; i++) { 
        x,
        y = spawnmonster(Play.maps[Play.cmap]['data']);
        ok = true;
        if (monsters[i]['x'] == x && monsters[i]['y'] == y) { //prevents monster collision
                ok = false;
        }

        if (ok) {
            monstertyperand = generateN(0, 3);
            monsters[i] = {
                        "x": x,
                        "y": y,
                        "fought": false
                    }
            switch (monstertyperand) {
                case 0:
                    monsters[i]["type"] = "slime";
                    break;
                case 1:
                    monsters[i]["type"] = "blobby";
                    break;
                case 2:
                    monsters[i]["type"] = "bat";
                    break;
                case 3:
                    monsters[i]["type"] = "spider";
                    break;

            }
        }
    }
    x,
    y = spawnmonster(Play.maps[Play.cmap]['data'])
    Play.maps[Play.cmap]['merchantp'] = [x, y]
}
var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,
    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/music/Gameplay.wav');
        if (this.cmap == null) {
            this.cmap = 0;
        }
        if (!this.maps) {
            this.maps = [{
                "monsters": [],
                "data": [],
                "collisiondata": [],
                "playerp": {
                    "x":336,
                    "y":336,
                },
                "merchantp": []
            }];
            generateSkeleton();
        }

        map_data["map"] = [].concat.apply([], this.maps[this.cmap]['data']);
        template['layers'][0]['data'] = map_data["map"]

        this.game.load.tilemap('map1', null, template, Phaser.Tilemap.TILED_JSON);
        n = generateN(1, 2000).toString();//stops browser caching images
        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png?' + n);
        this.game.load.spritesheet('indicator', 'assets/images/tiles/indicator.png?' + n,32,32,3);
        this.game.load.image('player', 'assets/images/hero/stationary.png?' + n);
        this.game.load.image('slime', 'assets/images/monsters/slime/stationary.png?' + n);
        this.game.load.image('blobby', 'assets/images/monsters/blobby/stationary.png?' + n);
        this.game.load.image('bat', 'assets/images/monsters/bat/stationary.png?' + n);
        this.game.load.image('spider', 'assets/images/monsters/spider/stationary.png?' + n);
        this.game.load.image('merchant', 'assets/images/Merchant/Merchant_Talking.png?' + n);
    },

    create: function() {
        this.game.music.play();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var map = null;
        var layer = null;
        this.game.stage.backgroundColor = '#787878';
        backgroundTileMap = this.game.add.tilemap('map1');
        backgroundTileMap.addTilesetImage('tilesheet', 'tiles');
        layer = backgroundTileMap.createLayer('Layer1');
        layer.resizeWorld();
        bob = this.game.add.sprite(this.maps[this.cmap]['playerp']["x"], this.maps[this.cmap]['playerp']["y"], 'player');
        bob.anchor.x = 0.5;
        bob.anchor.y = 0.5;
        indicator = this.game.add.sprite(this.game.input.mousePointer.x,this.game.input.mousePointer.y,'indicator');
        indicator.frame = 0;
        indicator.anchor.x = 0.5;
        indicator.anchor.y = 0.5;
        //var monstertyperand = 0;
        monsters = this.maps[this.cmap]['monsters']
        for (i = 0; i < monsters.length; i++) {
            if (!monsters[i]['fought']) {
                this.game.add.sprite(
                    monsters[i]['x'],
                    monsters[i]['y'],
                    monsters[i]['type']
                );
            }
        }

        this.game.add.sprite(
            this.maps[this.cmap]['merchantp'][0],
            this.maps[this.cmap]['merchantp'][1],
            'merchant'
        );
    },

    update: function() {
        //player order:
        //top
        //right
        //left
        //bottom

        player = [
            coordtile(bob.x, bob.y - 16),
            coordtile(bob.x + 16, bob.y),
            coordtile(bob.x - 16, bob.y),
            coordtile(bob.x, bob.y + 16)
        ];

        var collision = false;
        var mcollision = false;
        monsters = this.maps[this.cmap]['monsters'];
        for (a = 0; a < monsters.length; a++) {
            for (i = 0; i < player.length; i++) {
                if ((monsters[a]['x'] / 32) == player[i][0] && (monsters[a]['y'] / 32) == player[i][1]) {
                    if (!monsters[a]['fought']) {
                        mcollision = monsters[a]['type'];
                        monsters[a]['fought'] = true;
                        afought = true;
                    }
                    for (c = 0; c < monsters.length; c++) {
                        if (!monsters[c]['fought']) {
                            afought = false
                        }
                    }
                    if (afought) {
                        data = this.maps[this.cmap]['data']
                        for (b = 0; b < data.length; b++) {
                            if (data[b][data[b].length - 1] == 8) {
                                data[b][data[b].length - 1] = 9;
                            }
                        }
                    }
                }
            }
        }

        for (d = 0; d < player.length; d++) {
            ttype = this.maps[this.cmap]['data'][player[d][1]][player[d][0]]
            if (ttype > 3 && ttype != 7) {
                /*if (ttype == 9) {
                    this.cmap += 1
                    this.game.state.start('play');
                }*/
                collision = d;
            }
        }

        if (mcollision) {
            console.log("mcollision " + mcollision);
        }

        if (collision) {
            console.log("collision " + collision.toString());
        }

        if (moving != true) {
            //track location of cursor
            blockpos = getblock(this.game.input.mousePointer.x,this.game.input.mousePointer.y);
            movepos = getCentreOfBlock(blockpos.x,blockpos.y);
            indicator.x = movepos.x;
            indicator.y = movepos.y;
            indicatorpos = getblock(indicator.x,indicator.y);
            if (Play.maps[Play.cmap]['collisiondata'][indicatorpos.x][indicatorpos.y] == 1) {
                canmove = false;
                indicator.frame = 2
            }
            else {
                canmove = true
                indicator.frame = 0
            }
            //looking at cursor
            var angle = Math.atan2(this.game.input.mousePointer.y - bob.y, this.game.input.mousePointer.x - bob.x);
            angle = angle * (180 / Math.PI);
            bob.angle = angle + 90;
        } else {
            indicator.frame = 1
            if (!collision) {
                if (indicator.x > bob.x) {
                    bob.x = bob.x + 1;
                } else if (indicator.x < bob.x) {
                    bob.x = bob.x - 1;
                }
                if (indicator.y > bob.y) {
                    bob.y = bob.y + 1;
                } else if (indicator.y < bob.y) {
                    bob.y = bob.y - 1;
                }
                if (indicator.y == bob.y && indicator.x == bob.x) {
                    moving = false;
                }
            }
        }
        if (this.game.input.activePointer.leftButton.isDown === true && mouseclick === false && canmove == true) {
            mouseclick = true;
            moving = true;
            blockpos = getblock(this.game.input.mousePointer.x,this.game.input.mousePointer.y);
            movepos = getCentreOfBlock(blockpos.x,blockpos.y);
            indicator.x = movepos.x;
            indicator.y = movepos.y;
            var angle = Math.atan2(this.game.input.mousePointer.y - bob.y, this.game.input.mousePointer.x - bob.x);
            angle = angle * (180 / Math.PI);
            bob.angle = angle + 90;
            /*if (indicator.x > bob.X) {
            diffX = Math.round(indicator.x - bob.X);
            }
            else {
            diffX = Math.round(bob.X - indicator.x); 
            }
            if (indicator.y > bob.Y) {
            diffY = Math.round(indicator.y - bob.Y);
            }
            else {
            diffY = Math.round(bob.Y - indicator.y);    
            }*/

        }
        if (this.game.input.activePointer.leftButton.isDown === false && mouseclick === true) {
            mouseclick = false;
        }
        if (collision) {

            moving = false;
            switch (collision) {
                //same as css
                //top
                case 0:
                    bob.y += 1
                    break;
                    //right
                case 1:
                    bob.x -= 1
                    break;
                    //left
                case 2:
                    bob.x += 1
                    break;
                    //bottom
                case 3:
                    bob.y -= 1
                    break;
            }


        }
        if (mcollision) {
            this.game.monster = {
                name: mcollision
            };
            this.maps[this.cmap]['playerp']["x"] = indicator.x;
            this.maps[this.cmap]['playerp']["y"] = indicator.y;
            this.game.combat_invoker = this;
            this.game.state.start('combat');
        }
    }
};
