var template = { "height":20,
		 "layers":[
		           {
		            "data":[4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 5, 4, 2, 1, 2, 1, 2, 3, 1, 2, 3, 3, 3, 2, 1, 2, 1, 2, 1, 2, 6, 4, 2, 3, 3, 2, 1, 1, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 3, 4, 4, 1, 1, 1, 3, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 2, 3, 2, 3, 6, 4, 2, 3, 1, 3, 1, 1, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 1, 3, 4, 4, 3, 3, 2, 2, 3, 4, 2, 1, 1, 1, 3, 2, 3, 3, 6, 1, 2, 1, 6, 4, 1, 1, 2, 3, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 2, 3, 2, 6, 4, 1, 2, 2, 3, 1, 2, 3, 2, 2, 2, 3, 3, 2, 1, 1, 1, 3, 3, 5, 4, 1, 1, 2, 2, 3, 2, 1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 3, 3, 4, 4, 1, 2, 1, 1, 2, 1, 2, 1, 1, 3, 7, 3, 3, 1, 4, 2, 3, 1, 5, 4, 1, 2, 1, 3, 1, 2, 4, 1, 2, 3, 7, 2, 3, 2, 1, 2, 1, 3, 4, 4, 2, 1, 3, 2, 3, 2, 2, 3, 1, 7, 7, 2, 1, 3, 2, 3, 2, 3, 6, 4, 1, 2, 3, 3, 1, 2, 2, 1, 7, 7, 7, 1, 1, 2, 1, 2, 2, 1, 5, 4, 3, 2, 1, 1, 3, 2, 3, 2, 7, 1, 3, 3, 3, 3, 1, 2, 3, 1, 5, 4, 2, 1, 1, 1, 1, 3, 3, 2, 7, 3, 1, 2, 1, 2, 2, 2, 2, 1, 5, 5, 3, 2, 3, 2, 1, 1, 1, 2, 7, 1, 1, 3, 1, 2, 3, 2, 1, 3, 5, 6, 3, 3, 1, 3, 1, 3, 3, 3, 7, 3, 3, 1, 2, 2, 3, 1, 3, 1, 6, 6, 5, 4, 5, 5, 6, 4, 4, 4, 5, 4, 5, 4, 6, 5, 4, 6, 6, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		            "height":20,
		            "name":"Layer1",
		            "opacity":1,
		            "type":"tilelayer",
		            "visible":true,
		            "width":20,
		            "x":0,
		            "y":0
		           }],
		    "nextobjectid":1,
		    "orientation":"orthogonal",
		    "renderorder":"right-down",
		    "tileheight":32,
		    "tilesets":[
		           {
		            "columns":3,
		            "firstgid":1,
		            "image":"tilesheet.png",
		            "imageheight":96,
		            "imagewidth":96,
		            "margin":0,
		            "name":"tilesheet",
		            "spacing":0,
		            "tilecount":9,
		            "tileheight":32,
		            "tilewidth":32
		           }],
		    "tilewidth":32,
		    "version":1,
		    "width":20
		   }
var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;
        //uncomment below for dynamic
        //map_data = [].concat.apply([], generate())
        //console.log(map_data);
        //template['layers']['data'] = map_data
        //console.log(template);
        //  Tilemaps are split into two parts: The actual map data (usually stored in a CSV or JSON file) 
        //  and the tileset/s used to render the map.

        //  Here we'll load the tilemap data. The first parameter is a unique key for the map data.

        //  The second is a URL to the JSON file the map data is stored in. This is actually optional, you can pass the JSON object as the 3rd
        //  parameter if you already have it loaded (maybe via a 3rd party source or pre-generated). In which case pass 'null' as the URL and
        //  the JSON object as the 3rd parameter.

        //  The final one tells Phaser the foramt of the map data, in this case it's a JSON file exported from the Tiled map editor.
        //  This could be Phaser.Tilemap.CSV too.

        this.game.load.tilemap('map1', null, template,  Phaser.Tilemap.TILED_JSON);

        //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

        this.game.load.image('tiles', 'assets/images/tiles/tilesheet.png');
    },
    
    create: function() {
    	var map = null;
    	var layer = null;
    	  this.game.stage.backgroundColor = '#787878';

    	    //  The 'mario' key here is the Loader key given in game.load.tilemap
    	    map = this.game.add.tilemap('map1');

    	    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    	    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    	    map.addTilesetImage('tilesheet', 'tiles');
    	    
    	    //  Creates a layer from the World1 layer in the map data.
    	    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    	    layer = map.createLayer('Layer1');

    	    //  This resizes the game world to match the layer dimensions
    	    layer.resizeWorld();
    },

    update: function() {}
};
