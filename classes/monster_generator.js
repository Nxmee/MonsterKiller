function spawnmonster() {
    x = generateN(1, map_width - 2)
    y = generateN(1, map_length - 2)
    while (y > 3) {
        y = generateN(1, map_length - 2)
    }
    while (x > 3) {
        x = generateN(1, map_width - 2)
    }
    return y, x
}

spawnmonster()
