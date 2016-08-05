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
var monsters = [];
var monstersprites = null;
var merchant = [];
var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/music/Gameplay.wav');
        //uncomment below for dynamic
        map_data = [].concat.apply([], generate())
        template['layers'][0]['data'] = map_data
        map_data = [].concat.apply([], generate());
        monstersprites = this.game.add.group();
        for (i = 0; i < generateN(2, 5); i++) {
            x,
            y = spawnmonster(map_data);
            monsters.push([x, y])
        }
        x, y = spawnmonster(map_data)
        while (!monsters.indexOf([x, y])) {
            x,
            y = spawnmonster(map_data)
        }
        merchant = [x, y]
            // template['layers']['data'] = map_data
            // game.load.tilemap('tilemap', null, template, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map1', null, template, Phaser.Tilemap.TILED_JSON);
        n = generateN(1, 2000).toString();
        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png?' + n);
        this.game.load.image('player', 'assets/images/hero/stationary.png?' + n);
        this.game.load.image('slime', 'assets/images/monsters/slime/Slime.png?' + n);
        this.game.load.image('blobby', 'assets/images/monsters/blobby/stationary.png?' + n);
        this.game.load.image('bat', 'assets/images/monsters/bat/bat.png?' + n);
        this.game.load.image('spider', 'assets/images/monsters/spider/walking.png?' + n);
        this.game.load.image('merchant', 'assets/images/Merchant/Merchant_Talking.png?' + n);
    },

    create: function() {
        //this.game = game;
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
        var monstertyperand = 0;
        for (i = 0; i < monsters.length; i++) {
            var rand = Math.random() * 4.0
                //console.log(rand);
            monstertyperand = Math.floor(rand);
            //console.log(monstertyperand);
            console.log("hello");
            console.log(Math.random());
            console.log(Math.random());
            switch (monstertyperand) {
                case 0:
                    // console.log("0")
                    //monsterssprites.create(monsters[i][0], monsters[i][1], 'slime');
                    this.game.add.sprite(monsters[i][0], monsters[i][1], 'slime');
                    break;
                case 1:
                    // console.log("1")
                    //monsterssprites.create(monsters[i][0], monsters[i][1], 'blobby');
                    this.game.add.sprite(monsters[i][0], monsters[i][1], 'blobby');
                    break;
                case 2:
                    // console.log("2")
                    //monsterssprites.create(monsters[i][0], monsters[i][1], 'bat');
                    this.game.add.sprite(monsters[i][0], monsters[i][1], 'bat');
                    break;
                case 3:
                    // console.log("3")
                    //monsterssprites.create(monsters[i][0], monsters[i][1], 'spider');
                    this.game.add.sprite(monsters[i][0], monsters[i][1], 'spider');
                    break;
                    // monstersprites.create(monsters[i][0], monsters[i][1], 'spider');
            };
        }
        this.game.add.sprite(merchant[0], merchant[1], 'merchant')
    },

    update: function() {
        //this.game = game;
        // bob.x = this.game.input.mousePointer.x;
        // bob.y = this.game.input.mousePointer.y;
        if (moving != true) {
            //track location of cursor
            moveX = (Math.floor(this.game.input.mousePointer.x / 32) * 32) + 8;
            moveY = (Math.floor(this.game.input.mousePointer.y / 32) * 32) + 8;
            //looking at cursor
            var angle = Math.atan2(this.game.input.mousePointer.y - bob.y, this.game.input.mousePointer.x - bob.x);
            angle = angle * (180 / Math.PI);
            /
            bob.angle = angle + 90;
        } else {
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
        if (this.game.input.activePointer.leftButton.isDown === true && mouseclick === false) {
            mouseclick = true;
            moving = true;
            moveX = Math.round(this.game.input.mousePointer.x / 32) * 32;
            moveY = Math.round(this.game.input.mousePointer.y / 32) * 32;
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
    }
};
