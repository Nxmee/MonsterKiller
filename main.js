window.onload = function() {
	var states;

	var width  = 720;
	var height = 720;

	var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create });
	game.game_state = 0;
	game.set_game_state = function (state) {
		game.game_state = state;
		states[game.game_state].create();
	};

	function preload () {
		states = [
			MainMenu
		];

		for (var i = states.length - 1; i >= 0; i--) {
			var state = states[i];
			state.preload(game);
		}
	}

	function create () {
		var state = states[game.game_state];
		state.create();
	}

	function update(){
		var state = states[game.game_state];
		state.update();
	}
};