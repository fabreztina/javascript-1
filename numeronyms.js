function numeronyms(str){
    return str.split(' ').reduce((acc,cur) => {
        if(cur.length > 3){
            acc +=  cur[0] + `${cur.length - 2}` + cur[cur.length - 1]
            acc += ' '
        }
        else{
            acc += cur
            acc += ' '
        }
        return acc
    },'')
}
console.log(numeronyms("Every developer likes to mix kubernetes and javascript"))