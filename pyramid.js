var i,j,k,x="",length=5;

for(i=1;i<=length;i++){
       for(k=1;k<=(length-i);k++){
        x+=" ";
       }
        for(var j=1;j<=i;j++){
            x+="* ";
        }
        x+="\n";
    }
    console.log(x);
