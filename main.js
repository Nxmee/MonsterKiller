window.onload = function() {
	var width  = 640;
	var height = 640;
	console.log("Before Play");
	var game = new Phaser.Game(width, height, Phaser.AUTO, '', { create: create });
	game.state.add('main_menu',    MainMenu);
	game.state.add('options_menu', OptionsMenu);
	game.state.add('play',        Play);
	//game.state.add('combat',       Combat);
	console.log("After Play");
	game.options = {
		sound: true,
		music: true,
	}

	function create () {
		game.state.start('main_menu');
	}

	function update(){
	}
};