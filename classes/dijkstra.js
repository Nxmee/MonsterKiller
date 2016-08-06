var instructionlist = [];
var nodemap = [[{
	"collide" : false,
	"distance": -1,
	"dir": -1,
	"final":false
}]]
function dijkstra(collisionmap, startpos, endpos) {
	importCollide(collisionmap);


}
function importCollide(collisionmap) {
    for(var i = 0; i < nodemap.length; i++) {
    var data = collisionmap[i];
    //var temp = [];
        for(var j = 0; j < data.length; j++) {
            if(collisionmap[j][i] = 1) {
                nodemap[j][i].collide = true
               //Play.maps[Play.cmap]['collisiondata'][i,j] = 1;
                //collision_data[i,j] = 1;
            }
            else {
                nodemap[j][i].collide = false
                //Play.maps[Play.cmap]['collisiondata'][i,j] = 0;
                //collision_data[i,j] = 0;
            }
        }
        //Play.maps[Play.cmap]['collisiondata'].push(temp);
    }
}
function 