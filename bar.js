var Bar = function (game, progress) {
	this.game     = game;
	this.progress = progress;

	this.game.load.spritesheet(
		'bar_background',
		'assets/misc/Images/bar_background.png',
		620,
		16
	);

	this.game.load.spritesheet(
		'bar_bar',
		'assets/misc/Images/bar_bar.png',
		616,
		12
	);

	this.draw = function () {
		this.game.add.sprite(50, 50, 'bar_background');
	};
};