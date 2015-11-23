/*
Create an object and assign it to a variable "spinner"..

var spinner = ....

the object is expected to exhibit the following behavior

spinner.up();  //=> 1
spinner.up();  //=> 2
spinner.up();  //=> 3
spinner.up();  //=> 4

spinner.down(); // => 3
spinner.down(); // => 2
spinner.down(); // => 1
spinner.down(); // => 0
spinner.down(); // => -1


*/

function getSpinner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    };
}

var spinner = getSpinner();
spinner.up();
spinner.up();
spinner.down();
spinner.down();



