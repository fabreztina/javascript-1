function mergesort(n){
    if(n.length < 2){
        return n;
    }
    let mid=Math.floor(n.length / 2);
    let left=n.slice(0,mid);
    // console.log(left);
    let right=n.slice(mid);
    // console.log(right);
    return merge(mergesort(left),mergesort(right));
}
console.log(mergesort([11,2,33,49,3,5]))

function merge(left,right){
    let i=0,j=0,m=[];
    while(i < left.length  &&  j < right.length){
        if(left[i] < right[j]){
            m.push(left[i]);
            i++;
        }
        else{
            m.push(right[j]);
            j++;
        }
    }
     return [...m,...left.slice(i),...right.slice(j)];
}
