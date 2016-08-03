var MusicPlayer = {
	music: {
		stop: function () {}
	},

	init: function (game) {
		this.game = game;
	},

	load: function (location) {
		this.game.load.audio('music', location);
	},

	play: function () {
		this.music.stop();
		this.music = this.game.add.audio('music');
		this.music.mute = !this.game.options.music;
		this.music.play();
		this.music.loopFull(0.6);
	},

	set_state: function (state){
		this.music.mute = !state;
	}
};