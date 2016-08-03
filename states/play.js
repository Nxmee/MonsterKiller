
var Play = {
    //http://phaser.io/examples/v2/loader/load-tilemap-json
    game: null,

    preload: function(game) {
        this.game = game;

        //  Tilemaps are split into two parts: The actual map data (usually stored in a CSV or JSON file) 
        //  and the tileset/s used to render the map.

        //  Here we'll load the tilemap data. The first parameter is a unique key for the map data.

        //  The second is a URL to the JSON file the map data is stored in. This is actually optional, you can pass the JSON object as the 3rd
        //  parameter if you already have it loaded (maybe via a 3rd party source or pre-generated). In which case pass 'null' as the URL and
        //  the JSON object as the 3rd parameter.

        //  The final one tells Phaser the foramt of the map data, in this case it's a JSON file exported from the Tiled map editor.
        //  This could be Phaser.Tilemap.CSV too.

        this.game.load.tilemap('mario', 'assets/images/tiles/mario.json', null, Phaser.Tilemap.TILED_JSON);

        //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

        this.game.load.image('tiles', 'assets/images/super_mario.png');
    },
    map = null
    layer = null
    create: function() {
    	  game.stage.backgroundColor = '#787878';

    	    //  The 'mario' key here is the Loader key given in game.load.tilemap
    	    map = this.game.add.tilemap('mario');

    	    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    	    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    	    map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    	    
    	    //  Creates a layer from the World1 layer in the map data.
    	    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    	    layer = map.createLayer('World1');

    	    //  This resizes the game world to match the layer dimensions
    	    layer.resizeWorld();
    },

    update: function() {}
};
