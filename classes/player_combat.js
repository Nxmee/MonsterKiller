var PlayerCombat = function (game, combat, type) {
	this.type     = type;
	this.game     = game;
	this.combat   = combat;

	this.total_hp = 50;
	this.hp       = this.total_hp;
	this.exp      = 0;
	this.heals    = 3;
	this.shields  = 3;

	var sound_types = [
		'attacks/axe',
		'attacks/kick',
		'attacks/pointy_stick',
		'attacks/punch',
		'attacks/sword',

		'greetings/bat',
		'greetings/blobby',
		'greetings/slime',
		'greetings/spider',

		'dying',
		'hurt'
	];

	for (var i = sound_types.length - 1; i >= 0; i--) {
		var sound_name = sound_types[i];
		this.game.load.audio(
	    	'hero_' + sound_name,
	    	'assets/sfx/bob/' + sound_name + '.wav'
	    );
	}

	this.draw = function() {
		//nothing to draw
	};

	this.attack = function(dmg){
		this.attack_value(dmg);
	};

	this.dmg_sound = function(){
	}

	this.press_button = function (button) {
		button.press(this);
	};

	this.is_turn = function(){
		return this.combat.turn == 0;
	};

	this.die = function (){
	}

	this.won = function (){
	}
}

PlayerCombat.prototype = new Combatant();