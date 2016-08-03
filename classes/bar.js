var Bar = function (game, x, y, width, height, progress) {
	this.game     = game;
	this.x        = x;
	this.y        = y;
	this.width    = width;
	this.height   = height;
	this.progress = progress;

	this.game.load.image(
		'bar_background',
		'assets/images/misc/background.png'
	);

	this.game.load.image(
		'bar_bar',
		'assets/images/misc/bar.png'
	);

	this.draw = function () {
		var bg_bar = this.game.add.sprite(this.x, this.y, 'bar_background');
		bg_bar.resize(0, 0, this.width, this.height);

		var bar = this.game.add.sprite(this.x + 2, this.y + 2, 'bar_bar');
		bar.resize(0, 0, this.progress * (this.width - 4), this.height - 4);
	};
};

Phaser.Sprite.prototype.resize = function(x, y, w, h){
	w = Math.max(0, w);
	h = Math.max(0, h);

	var crop = new Phaser.Rectangle(x, y, w, h);
	this.crop(crop);
}
