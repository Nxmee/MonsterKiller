var CombatButton = function(game, conflict, location) {
	this.game         = game;
	this.conflict     = conflict;
	this.location     = location;

	this.game.load.spritesheet(
		this.location,
		location,
		100,
		32
	);

	this.presser = this.conflict.combatants[1];
}