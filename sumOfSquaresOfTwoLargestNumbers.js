function sumOfSquaresOfTwoLargestNumbers(a,b,c){
    let x,y,z;
    if(a<b && a<c){
        console.log("least number is:",a);
        x=(b*b)+(c*c);
        console.log(x);
    }
    else if (b<c) {
        console.log("least number is:",b);
        y=(a*a)+(c*c);
        console.log(y);
    } else {
        console.log("least number is:",c);
         z=(a*a)+(b*b);
        console.log(z);
    }
}
sumOfSquaresOfTwoLargestNumbers(1,20,3);
