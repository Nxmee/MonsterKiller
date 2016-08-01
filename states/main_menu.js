var MainMenu = class {
	var buttons

	preload() {
		buttons = [
		];

		for (var i = buttons.length - 1; i >= 0; i--) {
			button = buttons[i];
			game.load.spritesheet(button, 'assets/buttons/' + button + '.png', 193, 71);
		}
		
	}

	create() {
		for (var i = buttons.length - 1; i >= 0; i--) {
			button = buttons[i];
			game.add.button(game.world.centerX, (i * 100) + 300, button, null, this, 2, 1, 0);
		}
	}
};