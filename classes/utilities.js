function standingid(x, y) {
    x = Math.round((x + 8) / 20)
    y = Math.round((y + 8) / 20)
    return map[y][x]
}

function generateN(lower_bound, upper_bound) {
    return lower_bound + Math.floor(Math.random() * ((upper_bound - lower_bound) + 1))
}
