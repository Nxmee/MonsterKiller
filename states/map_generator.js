//dirt1 = 1
//dirt2 = 2
//dirt3 = 3
//tree  = 4
//tree2 = 5
//tree3 = 6

//map array
map = []

//up-down
map_length = 20

//left-right
map_width = 20

//generates map
for (a=0; a<20; a++) {
	row = []
	for (b=0; b<20; b++) {
		row.push(1)
	}
	map.push(row)
}

//adds border

console.log(map)
