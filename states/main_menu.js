var MainMenu = {
	buttons: [],

	preload: function () {
		this.buttons = ['continue'];

		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			game.load.spritesheet(button, 'assets/buttons/' + button + '.png', 193, 71);
		}
		
	},

	create: function () {
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			game.add.button(game.world.centerX, (i * 100) + 300, button, null, this, 2, 1, 0);
		}
	},

	update: function () {
	}
};