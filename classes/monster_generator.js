function spawnmonster() {
    x = generateN(1, map_width - 2)
    y = generateN(1, map_length - 2)
    while (y > 3) {
        y = generateN(1, map_length - 2)
    }
    while (x > 3) {
        x = generateN(1, map_width - 2)
    }
    x = x * 20
    y = y * 20
    return x, y
}

for (i = 0; i < randomN(10, 20); i++) {
    x,
    y = spawnmonster();
    game.add.sprite(x, y, 'blobbyw');
}
