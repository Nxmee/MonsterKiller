function spawnmonster() {
    x = generateN(1, map_width - 2)
    y = generateN(1, map_length - 2)
    while (map[y][x] > 3) {
        y = generateN(1, map_length - 2)
        x = generateN(1, map_width - 2)
    }
    x = x * 32
    y = y * 32
    return x, y
}
