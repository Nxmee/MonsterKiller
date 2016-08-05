window.onload = function() {
	var width  = 640;
	var height = 640;

	var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	game.state.add('main_menu',    MainMenu);
	game.state.add('options_menu', OptionsMenu);
	game.state.add('play',         Play);
	game.state.add('combat',       Combat);
	game.state.add('lose',         Lose);

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