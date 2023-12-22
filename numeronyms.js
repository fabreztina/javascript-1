function numeronyms(str){
    return str.split(' ').map(v => v.length > 3 ? v[0] + `${v.length - 2}` + v[v.length - 1] : v)
    .join(' ')
}
console.log(numeronyms("Every developer likes to mix kubernetes and javascript"))