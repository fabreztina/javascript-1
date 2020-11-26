var i,j,x="",length=9;
for(i=1;i<=length;i++){
    for(j=1;j<=length;j++){
        if(i===j || (length+1)-i===j){
            x+="*";
        }
        else{
            x+=" ";
        }
    }
    x+="\n";
}
console.log(x);