/**
 * Created by Dmytro on 11/12/2015.
 */
var DronView = (function(Pixi, Helper){

    /**
     *
     * @param {Object} stage
     * @constructor
     */


    //TODO
    function DronView(stage){
        this.initialize();
    }

    //Helper.extend(ButtonView, Pixi.Container);

    var proto = DronView.prototype;

    proto.initialize = function(position){
        this.setup(position);
    };

    proto.setup = function(position){
    };

    return DronView;
}(PIXI, Helper));