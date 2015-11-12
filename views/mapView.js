var MapView = (function(Pixi, Helper){

    /**
     *
     * @param {Object} stage
     * @constructor
     */
    function MapView(){
        this.mapHeight = document.body.offsetHeight / 2;
        this.mapWidth = document.body.offsetWidth / 2;
        this.initialize();
    }

    MapView.SCALE_STEP = .1;

    Helper.extend(MapView, Pixi.Container);

    var proto = MapView.prototype;

    proto.initialize = function(){
        this.setup();
    };

    proto.setup = function(){
        var graphics = new Pixi.Graphics();
        graphics.beginFill(0xFFFF00);
        graphics.lineStyle(1, 0xFF0000);
        graphics.drawRect(0, 0, this.mapWidth, this.mapHeight);
        this.addChild(graphics);
        Helper.toCenter(this);
    };

    proto.zoomIn = function(){
        var currScale = this.getCurrentScale() + MapView.SCALE_STEP;
        this.setScale(currScale);
    };

    proto.zoomOut = function () {
        var currScale = this.getCurrentScale() - MapView.SCALE_STEP;
        this.setScale(currScale);
    };

    proto.setScale = function(scale){
        var roundedScale = +(scale.toFixed(2));
        this.scale.set(roundedScale,roundedScale);
        Helper.toCenter(this);
    };

    proto.getCurrentScale = function(){
        return this.scale.x;
    };

    return MapView;
}(PIXI, Helper));