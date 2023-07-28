function outer(){
    // var a = 10;
    function inner(){
        console.log(a);
    }
    var a = 20;
    return inner;
}

// var outer1 = outer();
// outer1();

outer()();

/* The inner function has closure over the outer function which means it can access the outer function variables. I can't access inner function
outside of the outer function. If I want to access the inner function outside, I need to return the function. In line number 9, I'm calling 
the inner function and store it in the outer1 variables. In line number 10, I'm calling the outer1 which calls the outer function OR we can do
as per line number 12. outer()() -> this means, I'm calling inner function and outer funtion using 2 paranthesis.

  It's not about the sequence of variable. I can define a variable before or after the inner function(line 2 or 6), inner function still have 
  closure over the variable. 
 */


//   what if I use let instead of var. Because let has block scope. It cannot be accessed outside of the scope

function outer(b){
    function inner(){
        console.log(a, b);
    }
    let a = 10;
    return inner;
}
outer(20)();

/* If I use let instead of var, inner function still has closure over the variable even if I use let. Also inner function will have closure
over b variable.*/

function outest(){
    function outer(b){
        function inner(c){
            console.log(a,b,c);
        }
        return inner;
    }
    let a = 30;
    return outer
}

let close = outest()(20);
close(10);

let a = 50;

/* Here, I'm adding another function over outer function. In line 50, I'm calling the outest function and outer function with 2 paranthesis and
passing value for b variable. Then I'm store the value in close variable and I'm calling close function (inner function) and passing value for
c variable.

In line number 53, I'm declaring the global variable with same name ("a")). The JS engine will lookup for a, In line 46 we declared 'a'. So it'll
assign the value (30) and it'll not take the global variable 'a'. If we don't declare 'a' variable in line 46, then the engine will lookup for 'a'
in upper scope. If we don't have any upper function than that, then it'll look for global variable and assign it. If don't have global variable too,
it'll throw reference error.
*/

// ADVANTAGES OF CLOSURE :

 /*  It helps in Data hiding and encapsulation */


// DATA HIDING AND ENCAPSULATION:

// If we have a variable and we need to encapsulate the data (i.e, that should not be accessible to other functions) for instance,

var count = 0;

function increment(){
    count++;
}

/* In the above code, the count variable is in global scope. Any function can use count variable. To avoid this, we can wrap this function in a 
closure */

function counter(){
    var count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    return increment
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();

/* Now the count variable is kept private. In line 94, I'm calling counter function, which will return the increment function to counter1 variable
and when I call counter1 it'll increment the count.

In line 98, I'm declaring a new variable counter2. counter2 never touch the scope of counter1. It'll create new scope and counter will create new closure
 */

function Counter(){
    var count = 0;
    this.increment = function() {
        count++;
        console.log(count);
    }
    this.decrement = function() {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.increment();
counter1.decrement();

// I created a constructor. I can access the 2 functions by using '.' 

// DISADVANTAGES OF CLOSURE

/* There would be over consumption of memory everytime the closure is formed.
Sometimes the closed over variables are not garbage collected till the program expires.
If not handled properly, it may lead to memory leak. */

// GARBAGE COLLECTOR:

/* it is like a program in the browser or JS engine which will free up the memory.
JS is a high level language. In c or c++, it's upto the developers how we allocate or deallocate the memory. In JS this work is done by Browser or JS engine
whenever there's a unused variable, the garbage collector will see and free up the memory.
 */

function a(){
    let x = 10;
    function b(){
        console.log(x);
    }
    return b;
}

let y = a();

//some operation

y();

/* Here, function b has closure over a. The variable 'x' will not be freed until the function executes. In line 147, I'm calling function a and store the 
value in y. Now the variable x will not be garbage collected. Because we can call y whenever and wherever we want. Until that x will not be
garbage collected. But some of the modern browser do smart garbage collection which means, */

function a(){
    let x = 10, z = 4;
    function b(){
        console.log(x);
    }
    return b;
}

let w = a();
w();

console.log(z); // reference error

/* smart garbage collection means, some modern browser(like chrome) will find the unused variables and removed them from the memory. If we try to print the 'z'
outside of the function it'll throw reference error. Because it was garbage collected (will no longer be in memory). After the execution of 
line 165 (after the function 'a' call) the 'z' will no longer be in memory.
 */
