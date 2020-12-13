var i,j,k,n=5;
var array=new Array(5);
for(i=1;i<=10;i++){
    for(j=1;j<=n;j++){
        console.log(array[j]=`${j}*${i}=${j*i}`);
    }
    
    console.log(array.join(" "+" "+" "));
}