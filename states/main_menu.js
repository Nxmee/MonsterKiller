var MainMenu = {
	buttons: [
		{
			name:   'new_game',
			onclick: function () {
				alert('New Game!');
			}
		}
	],

	button_width:   250,
	button_height:  50,
	buttons_y:      100,
	button_spacing: 75,

	preload: function (game) {
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			game.load.spritesheet(
				button.name,
				'assets/buttons/' + button.name + '.png',
				this.button_width,
				this.button_height
			);
		}
		
	},

	create: function (game) {
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			game.add.button(
				game.world.centerX - this.button_width/2,   // x position
				(i * this.button_spacing) + this.buttons_y, // y position
				button.name,                                // asset name
				button.onclick,                             // action
				this,
				2,
				1,
				0
			);
		}
	},

	update: function (game) {
	}
};