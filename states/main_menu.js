var MainMenu = {
	buttons: [
		{
			name: 'new_game',
			onclick: function () {
				this.game.state.start('play');
			}
		},

		{
			name: 'continue',
			onclick: function () {
				this.game.state.start('combat');
			}
		},

		{
			name: 'High_score',
			onclick: function () {
			}
		},

		{
			name: 'Options',
			onclick: function () {
				this.game.state.start('options_menu');
			}
		}
	],

	button_width:   250,
	button_height:  50,
	buttons_y:      100,
	button_spacing: 75,

	game: null,

	preload: function (game) {
		this.game = game;


		// bg tile
		this.game.load.spritesheet(
			'bg_tile',
			'assets/images/tiles/dirt_2.png',
			32,
			32
		);

		// buttons
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			this.game.load.spritesheet(
				button.name,
				'assets/images/buttons/' + button.name + '.png',
				this.button_width,
				this.button_height
			);
		}		
	},

	create: function () {
		// play music


		// tile background
		this.game.add.tileSprite(
			0,
			0,
			this.game.world.width,
			this.game.world.height,
			'bg_tile'
		);

		// draw buttons
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			this.game.add.button(
				this.game.world.centerX - this.button_width/2,
				(i * this.button_spacing) + this.buttons_y,   
				button.name,
				button.onclick,
				this,
				2,
				1,
				0
			);
		}
	},

	update: function () {
	}
};