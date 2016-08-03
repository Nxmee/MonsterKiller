var Combatant = function (){
	this.attack_value = function (dmg) {
		this.opponent().damage(dmg);
	};

	this.damage = function (dmg) {
		this.hp -= dmg;
		this.check_alive();
	};

	this.opponent = function() {
		var both = this.combat.combatants;
		if (both[0] == this) {
			return both[1];
		} else {
			return both[0];
		}
	};

	this.check_alive = function () {
		if (this.hp < 0) {
			alert('DEAD!');
		}
	};

	this.hp_frac = function () {
		return this.hp / this.total_hp;
	}
}