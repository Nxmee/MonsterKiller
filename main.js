window.onload = function() {
	var width  = 720;
	var height = 720;

	var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create });
	game.state.add('main_menu',    MainMenu);
	game.state.add('options_menu', OptionsMenu);
	game.state.add('play',         Play);
	game.state.add('combat',       Combat);

	game.music = MusicPlayer;
	game.music.init(game);

	game.options = {
		sound: true,
		music: true,
		update: function () {
			game.music.set_state(this.music);
		}
	}

	function preload () {
	}

	function create () {
		game.state.start('main_menu');
	}

	function update(){
	}
};