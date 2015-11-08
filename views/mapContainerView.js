/**
 * Created by Dmytro on 11/7/2015.
 */
var MapContainerView = (function (Pixi, Helper) {
    function MapContainerView() {
        this.mapHeigth = document.body.offsetHeight - 100;
        this.mapWidth = document.body.offsetWidth - 100;
        this.initialize();
    }

    Helper.extend(MapContainerView, Pixi.Container);

    var proto = MapContainerView.prototype;

    proto.initialize = function () {
        this.setup();
    };

    proto.setup = function () {
        this.rect = this.getRectangle();
        Helper.toCenter(this.rect);
        this.addChild(this.rect);
    };

    proto.getRectangle = function(){
        var rect = new Pixi.Graphics();
        rect.beginFill(0xFFFF00);
        rect.lineStyle(1, 0xFF0000);
        rect.drawRect(0, 0, this.mapWidth, this.mapHeigth);

        return rect;
    };

    proto.setScale = function(scale){
        var roundedScale = +(scale.toFixed(2));
        this.rect.scale.set(roundedScale,roundedScale);
        this.currentScaleValue = roundedScale;
        Helper.toCenter(this.rect);
    };

    proto.getCurentScaleValue = function(){
        var value = this.currentScaleValue;
        return typeof value == 'number'? value : 1;
    };

    return MapContainerView;
}(PIXI, Helper));