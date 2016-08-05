function coordtile(x, y) {
    tileX = Math.floor(x / 32);
    tileY = Math.floor(y / 32);
    return ([tileX, tileY])
}

function generateN(lower_bound, upper_bound) {
    return lower_bound + Math.floor(Math.random() * ((upper_bound - lower_bound) + 1))
}
