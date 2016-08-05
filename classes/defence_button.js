var DefenceButton = function (game, conflict, location, action, requirements) {
	CombatButton.apply(this, arguments);

	this.action       = action;
	this.requirements = requirements;

	this.press = function(){
		if (this.can_press()) {
			this.action();
			this.conflict.change_turn();
		}
	};

	this.can_press = function() {
		return this.presser.is_turn() && this.requirements();
	}

	this.draw = function (i) {
		var buttons = this.conflict.buttons.length - 5;

		i -= 5;

		var exp_bar_width = this.conflict.exp_bar.width;
        var button_width = 100; // REPEATED INFORMATION
        var spacing = (exp_bar_width - (buttons * button_width)) / (buttons - 1);

		this.game.add.button(
			(i * (button_width + spacing)) + 50,
			this.game.height - 150,
			this.location,
			this.press,
			this,
			this.can_press() ? 1 : 0,
			this.can_press() ? 1 : 0,
			this.can_press() ? 1 : 0
		);
	};
}

DefenceButton.prototype = new CombatButton();
DefenceButton.prototype.constructor = DefenceButton;