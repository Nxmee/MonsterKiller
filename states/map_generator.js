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

//debug
console.log(map)
