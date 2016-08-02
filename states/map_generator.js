//dirt1 = 1
//dirt2 = 2
//dirt3 = 3
//tree  = 4
//tree2 = 5
//tree3 = 6

map = []

for (i=0, i<20, i++) {
	row = []
	for (i=0, i<20, i++) {
		row.append(1)
	}
	map.append(row)
}

console.log(map)
