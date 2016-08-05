var Combat = {
    game: null,

    preload: function(game) {
        this.game = game;
        this.monster = this.game.monster;
        this.game.music.load('assets/music/battle_loop.wav');

        this.combatants = [
            new MonsterCombat(this.game, this, this.monster),
            new  PlayerCombat(this.game, this)
        ];

        this.exp_bar = new Bar(this.game, 50, this.game.width - 50, this.game.width - 100, 16, 0);

        this.game.load.spritesheet(
            'monster_name',
            'assets/images/labels/name_' + this.monster.name + '.png'
        );

        this.game.load.spritesheet(
            'hero_name',
            'assets/images/labels/name_hero.png'
        );

        this.player_bar  = new Bar(this.game, 50,                    50, 100, 16, 1);
        this.monster_bar = new Bar(this.game, this.game.width - 150, 50, 100, 16, 1);

        this.turn = 0;

        this.game.load.spritesheet(
            'bg',
            'assets/images/tiles/battle_bg.png'
        );

        this.buttons = [
             new AttackButton(this.game, this, 'assets/images/buttons/punch.png',       'attacks/punch',        -0.025, 4),
             new AttackButton(this.game, this, 'assets/images/buttons/pointystick.png', 'attacks/pointy_stick',  0.25,  30),
             new AttackButton(this.game, this, 'assets/images/buttons/kick.png',        'attacks/kick',          0.44,  40),
             new AttackButton(this.game, this, 'assets/images/buttons/axe.png',         'attacks/axe',           0.65,  100),
             new AttackButton(this.game, this, 'assets/images/buttons/sword.png',       'attacks/sword',         0.85,  200),

            new DefenceButton(this.game, this, 'assets/images/buttons/heal.png',   function(){
                if (this.presser.heals >= 1){
                    this.presser.heal(20);
                    this.presser.heals -= 1;
                }
            }, function (){
                return this.presser.heals >= 1;
            }),

            new DefenceButton(this.game, this, 'assets/images/buttons/shield.png', function(){
                this.presser.dr += 50;
                this.presser.shields -= 1;
            }, function() {
                return this.presser.shields >= 1 && this.presser.dr == 0;
            })
        ];
    },

    create: function() {
        this.game.add.audio('hero_greetings/' + this.monster.name);

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
    },

    change_turn: function() {
        this.turn = this.turn == 0 ? 1 : 0;
    }
};
