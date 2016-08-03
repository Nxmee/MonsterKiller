var AttackButton = function (game, conflict, location, damage, required_exp) {
	this.location     = location;
	this.conflict     = conflict;
	this.damage       = damage;
	this.required_exp = required_exp;
	this.game         = game;

	this.game.load.spritesheet(
		'button',
		location,
		100,
		32
	);

	this.press = function(){
		this.conflict.combatants[1].attack(damage);
	};

	this.draw = function (x, y) {
		this.game.add.button(
			x,
			y,
			'button',
			this.press,
			this
		);
	};
}