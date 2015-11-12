/**
 * Created by Dmytro on 11/8/2015.
 */
var Stage = (function (Pixi, Helper, LayoutView) {
    function Stage() {
        this.initialize();
    }

    Helper.extend(Stage, Pixi.Container);

    var proto = Stage.prototype;

    proto.initialize = function () {
        this.layoutView = new LayoutView();
        this.setup();
    };

    proto.setup = function () {
        this.addChildAt(this.layoutView, 0);
    };

    return Stage;
}(PIXI, Helper, LayoutView, ButtonView));
