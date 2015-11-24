
function getPrimeFinder(){
    var cache = {};
    function isPrime(n){
        console.log('processing - ', n);
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = isPrime(n);
        return cache[n];
    };
}

function getCuber(){
    var cache = {};
    function getCube(n){
        console.log('processing - ', n);
        return n * n * n;
    }
    return function(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = getCube(n);
        return cache[n];
    };
}

function memoize(fn){
    var cache = {};
    return function(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = fn(n);
        return cache[n];
    };
}

function getCuber(){
    function getCube(n){
        console.log('processing - ', n);
        return n * n * n;
    }
    return memoize(getCube);
}

function powerOf(n, pow){
    console.log('processing ', n , '^', pow);
    var result = 1;
    for(var i=0; i<pow; i++)
        result *= n;
    return result;
}

function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === 'undefined')
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    };
}





