var template = {
    "height": 20,
    "layers": [{
        "data": [6, 6, 5, 5, 6, 5, 6, 6, 5, 5, 5, 6, 4, 6, 6, 4, 5, 6, 0, 0, 6, 3, 3, 1, 3, 3, 3, 7, 1, 1, 1, 2, 3, 3, 3, 2, 1, 6, 0, 0, 4, 2, 3, 2, 1, 1, 3, 7, 2, 2, 2, 3, 1, 3, 1, 2, 2, 5, 0, 0, 4, 2, 3, 2, 3, 7, 7, 7, 1, 2, 2, 2, 1, 2, 2, 1, 1, 5, 0, 0, 4, 3, 2, 2, 2, 7, 1, 7, 2, 3, 3, 3, 2, 3, 3, 1, 2, 5, 0, 0, 6, 2, 2, 3, 1, 3, 1, 7, 3, 1, 1, 2, 2, 3, 1, 3, 1, 4, 0, 0, 5, 1, 3, 1, 3, 3, 3, 7, 7, 3, 3, 1, 1, 3, 2, 3, 3, 5, 0, 0, 4, 1, 2, 1, 4, 3, 3, 3, 7, 1, 2, 2, 1, 2, 5, 2, 3, 4, 0, 0, 5, 3, 1, 1, 2, 2, 2, 2, 7, 1, 3, 1, 1, 1, 1, 1, 2, 4, 0, 0, 5, 3, 2, 3, 1, 1, 3, 1, 2, 2, 2, 1, 2, 3, 2, 3, 3, 4, 0, 0, 5, 1, 2, 1, 1, 1, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 1, 6, 0, 0, 5, 1, 2, 2, 3, 3, 1, 3, 1, 3, 2, 1, 2, 2, 1, 3, 3, 4, 0, 0, 5, 3, 1, 1, 2, 2, 3, 3, 1, 3, 1, 1, 2, 2, 2, 2, 3, 5, 0, 0, 6, 2, 1, 2, 1, 2, 2, 2, 2, 2, 3, 1, 4, 2, 3, 3, 3, 6, 0, 0, 5, 1, 3, 2, 3, 1, 1, 3, 2, 1, 2, 2, 2, 3, 1, 2, 1, 4, 0, 0, 6, 1, 3, 2, 3, 2, 3, 3, 1, 3, 3, 1, 1, 1, 2, 1, 1, 5, 0, 0, 5, 2, 2, 3, 3, 2, 3, 2, 1, 3, 1, 3, 3, 3, 2, 2, 1, 6, 0, 0, 4, 2, 3, 3, 3, 1, 2, 1, 1, 2, 2, 3, 3, 2, 2, 2, 2, 4, 0, 0, 6, 6, 5, 5, 4, 5, 5, 6, 4, 4, 4, 5, 4, 5, 5, 6, 4, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "height": 20,
        "name": "Tile Layer 1",
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
        "image": "assets\/tiles\/tilesheet.png",
        "imageheight": 96,
        "imagewidth": 96,
        "margin": 0,
        "name": "tilesheet1",
        "spacing": 0,
        "tilecount": 9,
        "tileheight": 32,
        "tilewidth": 32
    }],
    "tilewidth": 32,
    "version": 1,
    "width": 20
}


var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/Music/Gameplay.wav');
        map_data = [].concat.apply([], generate())
        console.log(map_data);
        template['layers']['data'] = map_data
        game.load.tilemap('tilemap', null
, template, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/tiles/tilesheet.png');
        /*this.game.loadspritesheet(
            'player',
            'assets/bob/bob_all',
            16,
            16
        );*/
    },
    map: null,
    create: function() {
        map = this.game.add.tilemap('tilemap');
        map.addTilesetImage('tilesheet1', 'tiles');
        this.game.music.play();
    },

    update: function() {}
};
