var Bar = function (game, x, y, width, height, progress) {
	this.game     = game;
	this.x        = x;
	this.y        = y;
	this.width    = width;
	this.height   = height;
	this.progress = progress;
	this.offset   = 2;

	game.load.image('bar_background', 'assets/misc/bar_background.png');
	game.load.image('bar_background', 'assets/misc/bar_background.png');

	this.draw = function () {
		this.bg = new Phaser.Rectangle(
			this.x,
			this.y,
			this.width,
			this.height
		);

		this.bar = new Phaser.Rectangle(
			this.x + 2,
			this.y + 2,
			this.progress * (this.width - 2),
			this.height - 2
		);

		this.game.debug.geom(bg, 'red');
		this.game.debug.geom(bar,'blue');
	}
};