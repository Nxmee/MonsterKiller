var AttackButton = function (game, conflict, location, damage, required_exp) {
	this.location     = location;
	this.conflict     = conflict;
	this.damage       = damage;
	this.required_exp = required_exp;
	this.game         = game;

	this.game.load.spritesheet(
		this.location,
		location,
		100,
		32
	);

	this.press = function(){
		this.conflict.combatants[1].attack(damage);
	};

	this.draw = function (i) {
		var buttons = this.conflict.buttons.length / 2;
		var exp_bar_width = this.conflict.exp_bar.width;
        var button_width = 100; // REPEATED INFORMATION
        var spacing = (exp_bar_width - (buttons * button_width)) / (buttons - 1);

		this.game.add.button(
			(i * (button_width + spacing)) + 50,
			this.game.height - 150,
			this.location,
			this.press,
			this
		);
	};
}