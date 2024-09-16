function getNameInitials(str){
    let strArray = str.split(' ')
    return strArray.reduce((acc, cur) => acc += cur[0], '')
}
console.log(getNameInitials("George Raymond Richard Martin"))