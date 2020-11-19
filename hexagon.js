var i,j,k,x="",length=5;
for(i=1;i<=length;i++){
    for(k=1;k<=(length-i);k++){
        x+=" ";
    }
    for(j=1;j<=i;j++){
        x+="* ";
    }
    x+="\n";
}

var p,q,r,s=length-1,y="";
for(p=length;p>=1;p--){
    if(s<=length){
        for(r=1;r<=(length-s);r++){
            y+=" ";
        }
        for(q=1;q<=s;q++){
            y+="* ";
        }
        y+="\n";
        s--;
    }
}
console.log(x+y)