var instructionlist = [];
var nodemap = [
    [{
        "collide": false,
        "distance": -1,
        "dir": -1,
        "final": false
    }]
]

function dijkstra(collisionmap, startpos, endpos) {
    importCollide(collisionmap);


}

function importCollide(collisionmap) {
    for (var i = 0; i < nodemap.length; i++) {
        var data = collisionmap[i];
        //var temp = [];
        for (var j = 0; j < data.length; j++) {
            if (collisionmap[j][i] = 1) {
                nodemap[j][i].collide = true
                    //Play.maps[Play.cmap]['collisiondata'][i,j] = 1;
                    //collision_data[i,j] = 1;
            } else {
                nodemap[j][i].collide = false
                    //Play.maps[Play.cmap]['collisiondata'][i,j] = 0;
                    //collision_data[i,j] = 0;
            }
        }
        //Play.maps[Play.cmap]['collisiondata'].push(temp);
    }
}

function

function returnNearby(Coords) { //returns an array of coordinates nearby a specified coordinate i.e entering [1,1] returns [0,0], [2,1] etc.
    var nearbyArray = []
    for (var X = -1; X < 2; X++) {
        for (var Y = -1; Y < 2; Y++) {
            newX = Coords[0] + X
            newY = Coords[1] + Y
            if (newX > 0 && newX < nodemap.length && newY > 0 && newY < nodemap[0].length) // makes sure the new coordinates are within the range
                nearbyArray.push([newX, newY])
        }
    }
}
