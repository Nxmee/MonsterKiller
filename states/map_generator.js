//dirt1 = 1
//dirt2 = 2
//dirt3 = 3
//tree1 = 4
//tree2 = 5
//tree3 = 6

//map array
map = []

//up-down
map_length = 20

//left-right
map_width = 25

//generates map
for (a=0; a<map_length; a++) {
	row = []
	for (b=0; b<map_width; b++) {
		row.push(1 + Math.floor(Math.random() * 3))
	}
	map.push(row)
}

//adds border
for (i=0; i<map_width; i++) {
	map[0][i] = 4 + Math.floor(Math.random() * 3)
	map[map_length-1][i] = 4 + Math.floor(Math.random() * 3)
}

for (i=0; i<map_length; i++) {
	map[i][0] = 4 + Math.floor(Math.random() * 3)
	map[i][map_width-1] = 4 + Math.floor(Math.random() * 3)
}

console.log(map)
