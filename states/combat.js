var Combat = {
    game: null,

    preload: function(game) {
        this.game = game;
        this.monster = this.game.monster;
        this.game.music.load('assets/music/battle_loop.wav');

        this.exp_bar = new Bar(this.game, 50, this.game.width - 50, this.game.width - 100, 16, 0);

        this.game.load.spritesheet(
            'monster_name',
            'assets/images/Lables/name_' + this.monster.name + '.png'
        );

        this.game.load.spritesheet(
            'hero_name',
            'assets/images/Lables/name_hero.png'
        );

        this.game.load.spritesheet(
            'monster_turn',
            'assets/images/Lables/monster_turn.png'
        );

        this.game.load.spritesheet(
            'hero_turn',
            'assets/images/Lables/hero_turn.png'
        );

        this.player_bar  = new Bar(this.game, 50,                    50, 100, 16, 1);
        this.monster_bar = new Bar(this.game, this.game.width - 150, 50, 100, 16, 1);

        this.combatants = [
            new MonsterCombat(this.game, this, this.monster),
            new  PlayerCombat(this.game, this)
        ]

        this.turn = 0;

        this.game.load.spritesheet(
            'bg',
            'assets/images/tiles/battle_bg.png'
        );

        this.buttons = [
             new AttackButton(this.game, this, 'assets/images/buttons/punch.png',       -0.05,  2),
             new AttackButton(this.game, this, 'assets/images/buttons/pointystick.png',  0.25,  15),
             new AttackButton(this.game, this, 'assets/images/buttons/kick.png',         0.44,  20),
             new AttackButton(this.game, this, 'assets/images/buttons/axe.png',          0.65,  50),
             new AttackButton(this.game, this, 'assets/images/buttons/sword.png',        0.85,  100),

            new DefenceButton(this.game, this, 'assets/images/buttons/heal.png',   function(){
                this.conflict.combatants[1].heal(20);
            }),

            new DefenceButton(this.game, this, 'assets/images/buttons/armour.png', function(){
                this.conflict.combatants[1].dr += 5;
            })
        ];
    },

    create: function() {
        this.game.music.play();

        this.game.add.sprite(
            0,
            0,
            'bg'
        );

        for (var i = this.combatants.length - 1; i >= 0; i--) {
            this.combatants[i].draw();
        }
    },

    update: function() {
        this.player_bar.draw();
        this.player_bar.progress = this.combatants[1].hp_frac();

        this.monster_bar.draw();
        this.monster_bar.progress = this.combatants[0].hp_frac();

        this.exp_bar.draw();
        this.exp_bar.progress = this.combatants[1].exp;

        for (var i = this.buttons.length - 1; i >= 0; i--) {
            this.buttons[i].draw(i);
        }

        if (this.combatants[0].is_turn()){
            this.combatants[0].take_turn();
        }

        this.game.add.sprite(50,                    20, 'hero_name');
        this.game.add.sprite(this.game.width - 150, 20, 'monster_name');

        this.game.add.sprite(this.game.width/2, 50,
            this.turn == 0 ? 'hero_turn' : 'monster_turn'
        );
    },

    change_turn: function() {
        this.turn = this.turn == 0 ? 1 : 0;
    }
};
