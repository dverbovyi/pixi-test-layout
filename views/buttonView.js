/**
 * Created by Dmytro on 11/8/2015.
 */
var ButtonView = (function(Pixi, Helper){

    /**
     *
     * @param {Object} layout
     * @constructor
     */
    function ButtonView(layout){
        this.layout = layout;
        this.style = {font : '48px Arial', align : 'center'};
        this.initialize();
    }

    Helper.extend(ButtonView, Pixi.Container);

    var proto = ButtonView.prototype;

    proto.initialize = function(position){
        this.setup(position);
        this.setupEventListener();
    };

    proto.setup = function(position){
        var plusButton = new Pixi.Text('+'),
            minusButton = new Pixi.Text('-');

        plusButton.style = minusButton.style = this.style;

        this.setPosition(plusButton, {x:10, y:10});
        this.setPosition(minusButton, {x:15, y:60});

        this.setButtonMode(plusButton);
        this.setButtonMode(minusButton);

        this.addChild(plusButton);
        this.addChild(minusButton);

        this.minusBtn = minusButton;
        this.plusBtn = plusButton;
    };

    proto.setPosition = function(el, position) {
        el.position.set(position.x, position.y);
    };

    proto.setButtonMode = function(el){
        el.buttonMode = el.interactive = true;
    };

    proto.setupEventListener = function(){
        var self = this;
        this.plusBtn.mousedown = function(){
            self.layout.zoomIn();
        };

        this.minusBtn.mousedown = function(){
            self.layout.zoomOut();
        }
    };

    return ButtonView;
}(PIXI, Helper));