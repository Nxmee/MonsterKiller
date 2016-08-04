var AttackButton = function (game, conflict, location, required_exp, damage) {
	CombatButton.apply(this, arguments);
	this.damage = damage;

	this.press = function(){
		if (this.can_press()) {
			this.conflict.combatants[1].attack(damage);
			this.conflict.change_turn();
			this.pay_exp();
		}
	};

	this.pay_exp = function(){
		this.conflict.combatants[1].exp -= this.required_exp;
		if (this.conflict.combatants[1].exp > 1) {
			this.conflict.combatants[1].exp = 1;
		}
	}

	this.can_press = function() {
		return this.enough_exp(this.conflict.combatants[1].exp) && 
		       this.conflict.combatants[1].is_turn();
	}

	this.enough_exp = function(exp){
		console.log(exp, "is enough for", this.required_exp);
		return exp >= this.required_exp;
	}

	this.draw = function (i) {
		var buttons = 5;

		var exp_bar_width = this.conflict.exp_bar.width;
        var button_width = 100; // REPEATED INFORMATION
        var spacing = (exp_bar_width - (buttons * button_width)) / (buttons - 1);

		this.game.add.button(
			(i * (button_width + spacing)) + 50,
			this.game.height - 100,
			this.location,
			this.press,
			this
		);
	};
}

AttackButton.prototype = new CombatButton();
AttackButton.prototype.constructor = AttackButton;