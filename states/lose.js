var Lose = {
	game: null,

	preload: function (game) {
		this.game = game;

		this.game.music.load('assets/music/menu.wav');

		this.game.load.spritesheet(
			'lose',
			'assets/images/gameover/gameover.png',
			this.game.width,
			this.game.height
		);
	},

	create: function () {
		// play music
		this.game.music.play();

		this.game.add.sprite(
			0,
			0,
			'lose'
		);
	},

	update: function () {
	}
};