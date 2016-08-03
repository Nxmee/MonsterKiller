var MonsterCombat = function (game, type) {
	this.type = type;
	this.game = game;

	this.game.load.image(
        'monster',
        'assets/images/monsters/blobby/combat.png'
    );

	this.draw = function() {
		var size = 400;

		var monster = this.game.add.sprite((720 - size) / 2, (720 - size) / 2, 'monster');
        monster.width  = 320;
        monster.height = 320;
	}
}