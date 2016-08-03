//dirt1 = 1
//dirt2 = 2
//dirt3 = 3
//tree1 = 4
//tree2 = 5
//tree3 = 6
//water = 7

//map array
var map = []

//up-down
var map_length = 20

//left-right
var map_width = 20

//river

//1 top
//2 right
//3 bottom
//4 left

//[up, right, down, left]

var sides = {
    1: {
        "x": generateN(4, map_width - 5),
        "y": 0,
        "sides": [0, 0.2, 0.6, 0.2]
    },
    2: {
        "x": map_width - 1,
        "y": generateN(4, map_length - 5),
        "sides": [0.2, 0, 0.2, 0.6]
    },
    3: {
        "x": generateN(4, map_width - 5),
        "y": map_length - 1,
        "sides": [0.6, 0.2, 0, 0.2]
    },
    4: {
        "x": 0,
        "y": generateN(4, map_length - 5),
        "sides": [0.2, 0.6, 0.2, 0]
    }
}

function generateN(lower_bound, upper_bound) {
    return lower_bound + Math.floor(Math.random() * ((upper_bound - lower_bound) + 1))
}

function generateDirt() {
    return generateN(1, 3)
}

function generateTree() {
    return generateN(4, 6)
}

function generateRiver() {
    try {
        side = generateN(1, 4)

        x = sides[side]["x"]
        y = sides[side]["y"]

        for (i = 0; i < generateN(10, 15); i++) {

            move = generateN(1, 100)

            //if move is 0-odds of up*100, go up
            up = sides[side]["sides"][0] * 100
                //if move is between up and odds of right*100, go right
            right = up + (sides[side]["sides"][1] * 100)
                //if move is between right and odds of down*100, go down
            down = right + (sides[side]["sides"][2] * 100)
                //if move is greater than all these values, go left

            if (move > 0) {
                if (move > up) {
                    if (move > right) {
                        if (move > down) {
                            x -= 1
                        } else {
                            y -= 1
                        }
                    } else {
                        x += 1
                    }
                } else {
                    y += 1
                }
            }

            //if x and y on the screen and not colliding into a tree, draw
            if (x > 0 && x < map_width - 1) {
                if (y > 0 && map_length - 1) {
                    if (map[y][x] > 3 && map[y][x] < 7) {
                        break
                    } else {
                        map[y][x] = generateN(7, 9)
                    }
                }
            }
        }
    } catch (err) {
//        pass
    }
}

function generateMap() {
    for (a = 0; a < map_length; a++) {
        row = []
        for (b = 0; b < map_width; b++) {
            row.push(generateDirt())
        }
        map.push(row)
    }
}

function treeBorder() {
    for (i = 0; i < map_width; i++) {
        map[0][i] = generateTree()
        map[map_length - 1][i] = generateTree()
    }

    for (i = 0; i < map_length; i++) {
        map[i][0] = generateTree()
        map[i][map_width - 1] = generateTree()
    }
}

//spawns trees in the map
function scenery() {
    n_trees = generateN(2, 5)
    for (i = 0; i < n_trees; i++) {
        x = generateN(1, (map_width - 2))
        y = generateN(1, (map_length - 2))
        map[y][x] = generateTree()
    }
}

function generate() {
	map = [];
    generateMap()
    treeBorder()
    scenery()
    for (i = 0; i < generateN(3, 5); i++) {
        generateRiver()
    }
    return map
}

//console.log(generate())
