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
var bob = null;
var moving = null;
var moveX = 0;
var moveY = 0;
var diffX = 0;
var diffY = 0;
var mouseclick = false;
var restore = false;
/*var monsters = [];
var monstersprites = null;
var monstertypes = [];
var merchant = [];
var raw_data;*/

function generateCrap() {
    Play.maps[Play.cmap]['data'] = generate();

    monsters = Play.maps[Play.cmap]['monsters']

    for (i = 0; i < generateN(2, 5); i++) {
        monsters.push({ "x": 0, "y": 0, "type": 0, "fought": false });
    }

    for (i = 0; i < Play.maps[Play.cmap]['monsters'].length; i++) {
        x,
        y = spawnmonster(Play.maps[Play.cmap]['data']);
        ok = true;
        if (monsters[i]['x'] == x) {
            if (monsters[i]['y'] == y) {
                ok = false;
            }
        }

        if (ok) {
            monstertyperand = Math.floor(Math.random() * 4.0);
            switch (monstertyperand) {
                case 0:
                    monsters[i] = {
                        "x": x,
                        "y": y,
                        "type": "slime",
                        "fought": false
                    }
                    break;
                case 1:
                    monsters[i] = {
                        "x": x,
                        "y": y,
                        "type": "blobby",
                        "fought": false
                    }
                    break;
                case 2:
                    monsters[i] = {
                        "x": x,
                        "y": y,
                        "type": "bat",
                        "fought": false
                    }
                    break;
                case 3:
                    monsters[i] = {
                        "x": x,
                        "y": y,
                        "type": "spider",
                        "fought": false
                    }
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
        //uncomment below for dynamic
        if (this.cmap == null) {
            this.cmap = 0;
        }

        if (!this.maps) {
            this.maps = [{
                "monsters": [
                    /*{
                        "x":0,
                        "y":0,
                        "type":"slime",
                        "fought": false
                    } */
                ],
                "data": [],
                "playerp": [],
                "merchantp": []
            }];
            generateCrap();
        }

        map_data = [].concat.apply([], this.maps[this.cmap]['data']);
        template['layers'][0]['data'] = map_data

        this.game.load.tilemap('map1', null, template, Phaser.Tilemap.TILED_JSON);
        n = generateN(1, 2000).toString();
        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png?' + n);
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
        map = this.game.add.tilemap('map1');
        map.addTilesetImage('tilesheet', 'tiles');
        layer = map.createLayer('Layer1');
        layer.resizeWorld();
        bob = this.game.add.sprite(320, 320, 'player');
        bob.anchor.x = 0.5;
        bob.anchor.y = 0.5;
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
        //this.game = game;
        // bob.x = this.game.input.mousePointer.x;
        // bob.y = this.game.input.mousePointer.y;
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
            moveX = (Math.floor(this.game.input.mousePointer.x / 32) * 32);
            moveY = (Math.floor(this.game.input.mousePointer.y / 32) * 32);
            //looking at cursor
            var angle = Math.atan2(this.game.input.mousePointer.y - bob.y, this.game.input.mousePointer.x - bob.x);
            angle = angle * (180 / Math.PI);
            bob.angle = angle + 90;
        } else {
            if (!collision) {
                if (moveX > bob.x) {
                    bob.x = bob.x + 1;
                } else if (moveX < bob.x) {
                    bob.x = bob.x - 1;
                }
                if (moveY > bob.y) {
                    bob.y = bob.y + 1;
                } else if (moveY < bob.y) {
                    bob.y = bob.y - 1;
                }
                if (moveY == bob.y && moveX == bob.x) {
                    moving = false;
                }
            }
        }
        if (this.game.input.activePointer.leftButton.isDown === true && mouseclick === false) {
            mouseclick = true;
            moving = true;
            moveX = 16 + (Math.round(this.game.input.mousePointer.x / 32) * 32);
            moveY = 16 + (Math.round(this.game.input.mousePointer.y / 32) * 32);
            /*if (moveX > bob.X) {
            diffX = Math.round(moveX - bob.X);
            }
            else {
            diffX = Math.round(bob.X - moveX);    
            }
            if (moveY > bob.Y) {
            diffY = Math.round(moveY - bob.Y);
            }
            else {
            diffY = Math.round(bob.Y - moveY);    
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
            this.maps[this.cmap]['playerp'] = [bob.x, bob.y];
            this.game.combat_invoker = this;
            this.game.state.start('combat');
        }
    }
};
