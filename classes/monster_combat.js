var MonsterCombat = function (game, combat, type) {
	this.type   = type;
	this.game   = game;
	this.combat = combat;

	this.total_hp = 100;
	this.hp = this.total_hp;

	this.game.load.image(
        'monster',
        'assets/images/monsters/blobby/combat.png'
    );

	this.draw = function() {
		var size = 400;

		var monster = this.game.add.sprite((this.game.width - size) / 2, (this.game.height - size) / 2, 'monster');
        monster.width  = this.game.width  / 2;
        monster.height = this.game.height / 2;
	};

	this.attack = function(){
		this.attack_value(20);
	};
}

MonsterCombat.prototype = new Combatant();