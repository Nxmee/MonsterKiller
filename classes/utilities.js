function coordtile(x, y) {
    tileX = Math.floor(x / 32);
    tileY = Math.floor(y / 32);
    return ([tileX, tileY])
}

function generateN(lower_bound, upper_bound) {
    return lower_bound + Math.floor(Math.random() * ((upper_bound - lower_bound) + 1))
}
//Returns the block coords of the specified position
//see https://www.khanacademy.org/computer-programming/square-detection-test/6136326014238720 for example
function getblock(x,y){
     var blockX = Math.floor(x/32);
     var blockY = Math.floor(y/32);
     var coords = {
       "x":blockX,
       "y":blockY
     };
     return coords;
 };
//get centre coordinates of block position
function getCentreOfBlock(blockX,blockY) {
    var X = (blockX * 32) + 16;
    var Y = (blockY * 32) + 16;
    var coords = {
       "x":X,
       "y":Y
     };
     return coords;
}; 
//function ArrayGrid