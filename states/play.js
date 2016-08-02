var play = {

	game: null,

	preload: function (game) {
		this.game = game;

		// bg tile
		this.game.load.spritesheet(
			'bg_tile',
			'assets/tiles/dirt.png',
			16,
			16
		);

	create: function () {
		// tile background
		this.game.add.tileSprite(
			0,
			0,
			this.game.world.width,
			this.game.world.height,
			'bg_tile'
		);
	},

	update: function () {
	}
};