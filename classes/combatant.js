var Combatant = function (){
	this.dr = 0;

	this.attack_value = function (dmg) {
		this.opponent().damage(Math.random() * dmg);
	};

	this.damage = function (dmg) {
		this.dr -= dmg;

		if (this.dr < 0){
			this.hp += this.dr;
			this.dr = 0;
		}
		
		setTimeout(this.dmg_sound, 50);
		this.check_alive();
	};

	this.heal = function(dmg) {
		this.hp += dmg;
		if (this.hp > this.total_hp) {
			this.hp = this.total_hp;
		}
	}

	this.opponent = function() {
		var both = this.combat.combatants;
		if (both[0] == this) {
			return both[1];
		} else {
			return both[0];
		}
	};

	this.check_alive = function () {
		if (this.hp <= 0) {
			this.die();
			this.opponent().won();
		}
	};

	this.hp_frac = function () {
		return this.hp / this.total_hp;
	}
}