function exponential(a,b){
    if(b<=1){
        return a;
    }
    return a*exponential(a,b-1);
    }