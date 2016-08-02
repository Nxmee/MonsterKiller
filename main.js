window.onload = function() {
	var states;
	var current_state = 0;

	//get document width and height
	var width  = window.innerWidth;
	var height = window.innerHeight;

	var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create });

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
		var state = states[current_state];
		state.create(game);
	}

	function update(){
		var state = states[current_state];
		state.update(game);
	}
};