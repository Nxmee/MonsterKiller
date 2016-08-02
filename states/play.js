var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;
        console.log([].concat.apply([], generate()));
        game.load.tilemap('tilemap', 'assets/tiles/map,json', [].concat.apply([], generate()), Phaser.Tilemap.TILED_JSON);
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
    },

    update: function() {}
};
