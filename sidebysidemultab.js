var i,j,k,n=3;
var array=new Array(3);
for(i=1;i<=10;i++){
    for(j=1;j<=n;j++){
        array[j]=j*i;
    }
    
    console.log(array.join(" "+" "+" "));
}