function Spinner(){
    var count = 0;
    if (!(this instanceof Spinner)) return new Spinner();
    this.up = function(){ return ++count; };
    this.down = function() { return --count; };
}
