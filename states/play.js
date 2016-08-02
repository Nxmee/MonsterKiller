var Play = {

	game: null,

	preload: function (game) {
		this.game = game;

		// bg tile
		this.game.load.sprite(
			'dirt1',
			'assets/tiles/dirt1.png',
			
		);
		this.game.load.sprite(
				'dirt2',
				'assets/tiles/dirt2.png',
				
		);
		this.game.load.sprite(
				'dirt3',
				'assets/tiles/dirt3.png',
				
			);
		this.game.loadspritesheet(
			'player', 
			'assets/bob/bob_all', 
			16, 
			16
		);
	},

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