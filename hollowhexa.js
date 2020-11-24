var i,j,k,length=7,x="";
for(i=4;i>0;i--){
  for(j=1;j<=length;j++)
  {
    if(j===i || (length+1)-i===j){
      x+="* ";
    }
   else {
    x+=" ";
}
}
x+="\n";
}
var y="";
for(i=1;i<=4;i++){
  for(j=1;j<=length;j++){
      if(j===i || (length+1)-i===j){
        y+="* ";
      }
      else{
        y+=" ";
      }
  }
  y+="\n";
}
console.log(x+y);

