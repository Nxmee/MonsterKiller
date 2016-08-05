var AttackButton = function (game, conflict, location, sound, required_exp, damage) {
	CombatButton.apply(this, arguments);

	this.damage       = damage;
	this.required_exp = required_exp;
	this.sound        = sound;

	this.press = function(){
		if (this.can_press()) {
			this.presser.attack(damage);
			this.game.sound.play('hero_' + this.sound);
			this.conflict.change_turn();
			this.pay_exp();
		}
	};

	this.pay_exp = function(){
		this.presser.exp -= this.required_exp;
		if (this.presser.exp > 1) {
			this.presser.exp = 1;
		}
	}

	this.can_press = function() {
		return this.enough_exp(this.presser.exp) && 
		       this.presser.is_turn();
	}

	this.enough_exp = function(exp){
		return exp >= this.required_exp;
	}

	this.draw = function (i) {
		var buttons = 5;

		var exp_bar_width = this.conflict.exp_bar.width;
        var button_width = 100; // REPEATED INFORMATION
        var spacing = (exp_bar_width - (buttons * button_width)) / (buttons - 1);

		button = this.game.add.button(
			(i * (button_width + spacing)) + 50,
			this.game.height - 100,
			this.location,
			this.press,
			this,
			this.can_press() ? 1 : 0,
			this.can_press() ? 1 : 0,
			this.can_press() ? 1 : 0
		);
	};
}

AttackButton.prototype = new CombatButton();
AttackButton.prototype.constructor = AttackButton;