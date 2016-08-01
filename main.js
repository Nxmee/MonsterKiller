window.onload = function() {
	var states;

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
			state.preload();
		}
	}

	function create () {
		state = states[0];
		state.create();
	}

};