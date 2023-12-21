function pyramidMixedNumberPattern(n){
    let str = ''
    const length = n+(n-1)
    let characterStartPosition = n
    let midCharacterPosition = n
    
    for(let row = 1; row <= n; row++){
        let characterValue = 1
        let characterCount = row
        let nextCharacterPosition = characterStartPosition

        for(let column = 1; column <= length; column++){
            if(column === characterStartPosition || column === nextCharacterPosition && characterCount > 0){
                if(column < midCharacterPosition){
                    str += characterValue
                    characterValue++
                }
                else if(column === midCharacterPosition){
                    str += characterValue
                }
                else{
                    characterValue--
                    str += characterValue
                }
                nextCharacterPosition += 2
                characterCount--
            }
            else{
                str += ' '
            }
        }
        characterStartPosition--
        str += '\n'
    }
   return str
}
console.log(pyramidMixedNumberPattern(8))
