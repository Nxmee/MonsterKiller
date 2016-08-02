//dirt1 = 1
//dirt2 = 2
//dirt3 = 3
//tree1 = 4
//tree2 = 5
//tree3 = 6

//map array
map = []

//up-down
map_length = 25

//left-right
map_width = 30

function generateN(lower_bound, upper_bound) {
	return lower_bound + Math.floor(Math.random() * ((upper_bound-lower_bound)+1))
}

function generateDirt() {
	return generateN(1,3)
}

function generateTree() {
	return generateN(4,6)
}

//generates map
for (a=0; a<map_length; a++) {
	row = []
	for (b=0; b<map_width; b++) {
		row.push(generateDirt())
	}
	map.push(row)
}

//adds tree border
for (i=0; i<map_width; i++) {
	map[0][i] = generateTree()
	map[map_length-1][i] = generateTree()
}

for (i=0; i<map_length; i++) {
	map[i][0] = generateTree()
	map[i][map_width-1] = generateTree()
}

//spawns trees in the map
n_trees = generateN(2,5)
for (i=0; i<n_trees; i++) {
	x = generateN(1, (map_width-2))
	y = generateN(1, (map_length-2))
	console.log(x, y)
	map[y][x] = generateTree()
}

//Spawns a river
//First pick a place on the edge to come from 
//1 top
//2 right
//3 bottom
//4 left
//[up, right, down, left]

side = generateN(1,4)
first_pos = generateN(10,15)
sides = {
	1: {
		"x": generateN(4, map_width-5),
		"y": 0,
		"sides": [0, 0.1, 0.8, 0.1]
	},
	2: {
		"x": map_width - 1,
		"y": generateN(4, map_length-5),
		"sides": [0.1, 0, 0.1, 0.8]
	},
	3: {
		"x": generateN(4, map_width-5),
		"y": map_length - 1,
		"sides": [0.8, 0.1, 0, 0.1]
	},
	4: {
		"x": 0,
		"y": generateN(4, map_length-5),
		"sides": [0.1, 0.8, 0.1, 0]
	}
}



//debug
console.log(map)
