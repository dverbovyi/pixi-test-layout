/**
 * Created by Dmytro on 11/8/2015.
 */
var Helper = (function () {
    function Helper() {
        throw new Error('Static class, The instance shouldn\'t be created')
    }

    Helper.extend = function(Child, Parent){
        var Surrogate = function(){};
        Surrogate.prototype = new Parent();
        Child.prototype = new Surrogate();
        Child.constructor = Child;
        Child.__super__ = Parent;
    };

    Helper.toCenter = function(element){
        var x = (document.body.offsetWidth - element.width)/2,
            y = (document.body.offsetHeight - element.height)/2;
        element.position.set(x, y);
    };

    return Helper;

}());