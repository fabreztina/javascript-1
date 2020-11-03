var studentName=prompt("enter name:");
console.log(studentName);
var stuClass=prompt("enter class:");
console.log("your class is:"+stuClass);
var stuSub=prompt("enter number of subjects:");
var mark= [];
for(var i=0;i<stuSub;i++){
    mark[i]=parseInt(prompt("enter mark"+(i+1)));
}
console.log(mark);
var total=0;
for(var j=0;j<mark.length;j++){
    total+=(mark[j]);
}
console.log(total);
var average=total/mark.length;
console.log(average);
