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

	var sound_types = ['attack', 'hurt', 'dying', 'greeting']
	for (var i = sound_types.length - 1; i >= 0; i--) {
		var sound_name = sound_types[i];
		this.game.load.audio(
	    	'monster_' + sound_name,
	    	'assets/sfx/' + this.monster.name + '/' + sound_name + '.wav'
	    );
	}

	this.draw = function() {
		var size = 384;

		var monster = this.game.add.sprite((this.game.width - size) / 2, (this.game.height - size) / 2, 'monster');
        //monster.width  = this.game.width  / 2;
        //monster.height = this.game.height / 2;
	};

	this.attack = function(){
		this.attack_value(10);
		game.sound.play('monster_attack');
	};

	this.dmg_sound = function(){
		game.sound.play('monster_hurt');
	}

	this.take_turn = function(){
		this.attack();
		this.combat.change_turn();
	};

	this.is_turn = function(){
		return this.combat.turn == 1;
	};

	this.die = function (){
		game.sound.play('monster_dying');
	}

	this.won = function (){
	}
}

MonsterCombat.prototype = new Combatant();