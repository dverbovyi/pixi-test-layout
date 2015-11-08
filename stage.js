/**
 * Created by Dmytro on 11/8/2015.
 */
var Stage = (function (Pixi, Helper, MapContainerView, ButtonView) {
    function Stage() {
        this.initialize();
    }

    Helper.extend(Stage, Pixi.Container);

    var proto = Stage.prototype;

    proto.initialize = function () {
        this.mapContainerView = new MapContainerView();
        this.setup();
    };

    proto.setup = function () {
        this.addChildAt(this.mapContainerView, 0);
        this.addChildAt(new ButtonView(this), 1);
    };

    proto.zoomIn = function () {
        var currScale = this.mapContainerView.getCurentScaleValue()+.1;
        this.mapContainerView.setScale(currScale);
    };

    proto.zoomOut = function () {
        var currScale = this.mapContainerView.getCurentScaleValue()-.1;
        this.mapContainerView.setScale(currScale);
    };

    return Stage;
}(PIXI, Helper, MapContainerView, ButtonView));
