var template = {
    "height": 20,
    "layers": [{
        "data": [4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 5, 4, 2, 1, 2, 1, 2, 3, 1, 2, 3, 3, 3, 2, 1, 2, 1, 2, 1, 2, 6, 4, 2, 3, 3, 2, 1, 1, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 3, 4, 4, 1, 1, 1, 3, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 2, 3, 2, 3, 6, 4, 2, 3, 1, 3, 1, 1, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 1, 3, 4, 4, 3, 3, 2, 2, 3, 4, 2, 1, 1, 1, 3, 2, 3, 3, 6, 1, 2, 1, 6, 4, 1, 1, 2, 3, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 2, 3, 2, 6, 4, 1, 2, 2, 3, 1, 2, 3, 2, 2, 2, 3, 3, 2, 1, 1, 1, 3, 3, 5, 4, 1, 1, 2, 2, 3, 2, 1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 3, 3, 4, 4, 1, 2, 1, 1, 2, 1, 2, 1, 1, 3, 7, 3, 3, 1, 4, 2, 3, 1, 5, 4, 1, 2, 1, 3, 1, 2, 4, 1, 2, 3, 7, 2, 3, 2, 1, 2, 1, 3, 4, 4, 2, 1, 3, 2, 3, 2, 2, 3, 1, 7, 7, 2, 1, 3, 2, 3, 2, 3, 6, 4, 1, 2, 3, 3, 1, 2, 2, 1, 7, 7, 7, 1, 1, 2, 1, 2, 2, 1, 5, 4, 3, 2, 1, 1, 3, 2, 3, 2, 7, 1, 3, 3, 3, 3, 1, 2, 3, 1, 5, 4, 2, 1, 1, 1, 1, 3, 3, 2, 7, 3, 1, 2, 1, 2, 2, 2, 2, 1, 5, 5, 3, 2, 3, 2, 1, 1, 1, 2, 7, 1, 1, 3, 1, 2, 3, 2, 1, 3, 5, 6, 3, 3, 1, 3, 1, 3, 3, 3, 7, 3, 3, 1, 2, 2, 3, 1, 3, 1, 6, 6, 5, 4, 5, 5, 6, 4, 4, 4, 5, 4, 5, 4, 6, 5, 4, 6, 6, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
            // template['layers']['data'] = map_data
            // game.load.tilemap('tilemap', null, template, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map1', null, template, Phaser.Tilemap.TILED_JSON);
        n = generateN(1, 2000).toString();
        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png?' + n);
        this.game.load.image('player', 'assets/images/hero/stationary.png');
        this.game.load.image('blobby', 'assets/images/monsters/blobby/stationary.png');
    },

    create: function() {
        this.game.music.play();
        var map = null;
        var layer = null;
        bob = this.game.add.sprite(320, 320, 'player');
        this.game.stage.backgroundColor = '#787878';
        map = this.game.add.tilemap('map1');
        map.addTilesetImage('tilesheet', 'tiles');
        layer = map.createLayer('Layer1');
        layer.resizeWorld();

        for (i = 0; i < generateN(5, 10); i++) {
            x,
            y = spawnmonster();
            this.game.add.sprite(x, y, 'blobby');
        }
    },

    update: function() {
        /*bob.x = this.game.input.mousePointer.x;
        bob.y = this.game.input.mousePointer.y;*/
    }
};
