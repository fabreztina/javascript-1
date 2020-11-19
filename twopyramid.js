var i,j,k,x="",length=1;
for(i=length;i>=1;i--){
    for(k=1;k<=(length-i);k++){
        x+=" ";
    }
    for(j=i;j>=1;j--){
        x+="* ";
    }
    x+="\n";
}
if(length==1){
    console.log("*");
}
else{
var p,q,r,y="",s=2;
for(p=1;p<=length;p++){
    if(s<=length){
    for(r=1;r<=(length-s);r++){
        y+=" ";
    }
    for(q=1;q<=s;q++){
        y+="* ";
    }
    y+="\n";
    s++;
}
}
console.log(x+y);
}