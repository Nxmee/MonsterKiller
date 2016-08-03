var Combat = {
    game: null,

    preload: function(game) {
        this.game = game;
        this.game.music.load('assets/music/battle_loop.wav');

        this.exp_bar = new Bar(this.game, 50, this.game.width - 50, this.game.width - 100, 16, 0);

        this.player_bar  = new Bar(this.game, 50,                    50, 100, 16, 1);
        this.monster_bar = new Bar(this.game, this.game.width - 150, 50, 100, 16, 1);

        this.combatants = [
            new MonsterCombat(this.game, this, 'blobby'),
            new  PlayerCombat(this.game, this)
        ]

        this.game.load.spritesheet(
            'bg',
            'assets/images/tiles/battle_bg.png'
        );

        this.buttons = [
            new AttackButton(this.game, this, 'assets/images/buttons/Punch_Button.png', 5, 0)
        ];
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
        this.player_bar.progress = this.combatants[1].hp_frac();

        this.monster_bar.draw();
        this.monster_bar.progress = this.combatants[0].hp_frac();

        this.exp_bar.draw();
        this.exp_bar.progress += 0.0005;

        for (var i = this.combatants.length - 1; i >= 0; i--) {
            this.combatants[i].draw();
        }

        for (var i = this.buttons.length - 1; i >= 0; i--) {
            this.buttons[i].draw((i * 116) + 50, this.game.height - 150);
        }
    }
};
