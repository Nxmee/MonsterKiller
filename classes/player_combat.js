var PlayerCombat = function (game, combat, type) {
	this.type   = type;
	this.game   = game;
	this.combat = combat;

	this.total_hp = 50;
	this.hp = this.total_hp;

	this.draw = function() {
		//nothing to draw
	};

	this.attack = function(dmg){
		this.attack_value(dmg);
	};

	this.press_button = function (button) {
		button.press(this);
	}
}

PlayerCombat.prototype = new Combatant();