var Combat = {
    game: null,

    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/music/battle_loop.wav');

        this.exp_bar = new Bar(this.game, 50, 720 - 50, 620, 16, 0);

        this.player_bar = new Bar(this.game, 50, 50, 100, 16, 1);
        this.monster_bar = new Bar(this.game, 720 - 150, 50, 100, 16, 1);

        this.monster = new MonsterCombat(this.game, 'blobby');

        this.game.load.spritesheet(
            'bg',
            'assets/images/tiles/tree_1.png'
        );
    },

    create: function() {
        this.game.music.play();
    },

    update: function() {
        this.game.add.sprite(
            0,
            0,
            'bg'
        );

        this.player_bar.draw();
        this.monster_bar.draw();
        this.monster_bar.progress -= 0.005;

        this.exp_bar.draw();
        this.exp_bar.progress += 0.0005;

        this.monster.draw();
    }
};