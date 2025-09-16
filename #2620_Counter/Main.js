/**
 * @param {number} n
 * @return {Function} counter
 */

function myCounter()
{
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}

var createCounter = function(n) {
    let currCount = n-1;
    return function()
    {
        currCount +=1;
        return currCount;
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */