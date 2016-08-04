var CombatButton = function(game, conflict, location, required_exp) {
	this.game         = game;
	this.conflict     = conflict;
	this.location     = location;
	this.required_exp = required_exp;

	this.game.load.spritesheet(
		this.location,
		location,
		100,
		32
	);
}