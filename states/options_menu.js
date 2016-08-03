var OptionsMenu = {
	buttons: [
		{
			name: 'sound',
			onclick: function () {
				if (this.sound.frame == 0) {
					this.sound.setFrames(1);
					this.game.options.sound = false;
				} else {
					this.sound.setFrames(0);
					this.game.options.sound = true;
				}
				this.game.options.update();
			}
		},

		{
			name: 'music',
			onclick: function () {
				if (this.music.frame == 0) {
					this.music.setFrames(1);
					this.game.options.music = false;
				} else {
					this.music.setFrames(0);
					this.game.options.music = true;
				}
				this.game.options.update();
			}
		},

		{
			name: 'back',
			onclick: function () {
				this.game.state.start('main_menu');
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

		this.game.music.load('assets/Music/Gameplay.wav');

		// bg tile
		this.game.load.spritesheet(
			'bg_tile',
			'assets/tiles/Water.png',
			32,
			32
		);

		// buttons
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			button = this.buttons[i];
			this.game.load.spritesheet(
				button.name,
				'assets/buttons/' + button.name + '.png',
				this.button_width,
				this.button_height
			);
		}
		
	},

	create: function () {
		// play music
		this.game.music.play();

		// tile background
		this.game.add.tileSprite(
			0,
			0,
			this.game.world.width,
			this.game.world.height,
			'bg_tile'
		);

		// draw buttons
		this.sound = this.game.add.button(
			this.game.world.centerX - this.button_width/2,
			(0 * this.button_spacing) + this.buttons_y,   
			this.buttons[0].name,
			this.buttons[0].onclick,
			this
		);
		if (this.game.options.sound) {
			this.sound.setFrames(0);
		} else {
			this.sound.setFrames(1);
		}

		this.music = this.game.add.button(
			this.game.world.centerX - this.button_width/2,
			(1 * this.button_spacing) + this.buttons_y,   
			this.buttons[1].name,
			this.buttons[1].onclick,
			this
		);
		if (this.game.options.music) {
			this.music.setFrames(0);
		} else {
			this.music.setFrames(1);
		}

		this.game.add.button(
			this.game.world.centerX - this.button_width/2,
			(2 * this.button_spacing) + this.buttons_y,   
			this.buttons[2].name,
			this.buttons[2].onclick,
			this
		);
	},

	update: function () {
	}
};