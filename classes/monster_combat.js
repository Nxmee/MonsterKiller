var MonsterCombat = function (game, combat, monster) {
	this.monster = monster;
	this.game    = game;
	this.combat  = combat;

	this.total_hp = 100;
	this.hp = this.total_hp;

	this.game.load.image(
        'monster',
        'assets/images/monsters/' + this.monster.name + '/combat.png'
    );

	this.draw = function() {
		var size = 384;

		var monster = this.game.add.sprite((this.game.width - size) / 2, (this.game.height - size) / 2 + 50, 'monster');
        //monster.width  = this.game.width  / 2;
        //monster.height = this.game.height / 2;
	};

	this.attack = function(){
		this.attack_value(10);
	};

	this.take_turn = function(){
		this.attack();
		this.combat.change_turn();
	};

	this.is_turn = function(){
		return this.combat.turn == 1;
	};
}

MonsterCombat.prototype = new Combatant();