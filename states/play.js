var Play = {
//http://phaser.io/examples/v2/loader/load-tilemap-json
	game: null,

	preload: function (game) {
		this.game = game;
		game.load.tilemap('tilemap', 'assets/tiles/map,json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/tiles/tilesheet.png');
		this.game.loadspritesheet(
			'player', 
			'assets/bob/bob_all', 
			16, 
			16
		);
	},
	var map;
	create: function () {
		map = game.add.tilemap('tilemap');
		map.addTilesetImage('tilesheet1', 'tiles');
	},

	update: function () {
	}
};