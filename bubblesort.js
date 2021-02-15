function bubbleSort(a){
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
return a;
}
console.log(bubbleSort([6,5,100,3,7,8,13,2]))
