/**
 * Created by Dmytro on 11/7/2015.
 */
var app = (function(Pixi, Stage){
    var renderOptions = {
            transparent: false,
            autoResize: true,
            antialias: true,
            clearBeforeRender: true,
            preserveDrawingBuffer: false,
            backgroundColor : 0x1099bb
        }, isStarted = false, renderer;

    var stage = new Stage();

    var createPixiRender = function(){
        renderer = new Pixi.autoDetectRenderer(document.body.offsetWidth, document.body.offsetHeight, renderOptions);
        document.body.appendChild(renderer.view);
    };

    var run = function(){
        requestAnimationFrame(run);
        renderer.render(stage);
    };

    return {
        start: function(){
            if(isStarted)
                throw new Error('Already started');

            isStarted = true;
            createPixiRender();
            run();
        }
    }
}(PIXI, Stage));