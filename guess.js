var userName=prompt("enter your name:");
console.log(userName);
var randomNumber=prompt("choose a number between 1 and 10:");
var i=0;
while(i<1){
    if((randomNumber==0)||(randomNumber>10))
    {
        alert("failed");
        break;
    }
    else{
        function randomInt(min,max)
        {
                 console.log("hello");
                 var result=min+Math.floor((max-min)*Math.random());
                 return result;
        }
        var result1=randomInt(1,10);
        console.log(result1);
        if(randomNumber==randomInt)
        {
            alert(`congradulations ${userName}`);
        }
        else{
             alert(`The number should be ${result1}. Better luck next time ${userName}`);
        }
        break;

    }
};


