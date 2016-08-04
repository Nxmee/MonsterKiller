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
var monsters = [];
var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/music/Gameplay.wav');
        //uncomment below for dynamic
        map_data = [].concat.apply([], generate())
        template['layers'][0]['data'] = map_data
        map_data = [].concat.apply([], generate())
        for (i = 0; i < generateN(2, 5); i++) {
            x,
            y = spawnmonster(map_data);
            monsters.push([x, y])
        }
        // template['layers']['data'] = map_data
        // game.load.tilemap('tilemap', null, template, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map1', null, template, Phaser.Tilemap.TILED_JSON);
        n = generateN(1, 2000).toString();
        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png?' + n);
        this.game.load.image('player', 'assets/images/hero/stationary.png?' + n);
        this.game.load.image('slime', 'assets/images/monsters/slime/Slime.png');
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
        bob.anchor.x
        for (i = 0; i < monsters.length; i++) {
            this.game.add.sprite(monsters[i][0], monsters[i][1], 'slime');
        }

    },

    update: function() {
    	//this.game = game;
       // bob.x = this.game.input.mousePointer.x;
       // bob.y = this.game.input.mousePointer.y;
        if (moving != true) {
        	moveX = this.game.input.mousePointer.x;
        	moveY = this.game.input.mousePointer.y;
        	var angle = Math.atan2(this.game.input.mousePointer.y - bob.y, this.game.input.mousePointer.x - bob.x );
			angle = angle * (180/Math.PI);
			bob.angle = angle
        }
    }
};
