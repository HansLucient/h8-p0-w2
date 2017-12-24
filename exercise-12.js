function balikString (kata) {
  let tmp=[]
    for (var i = kata.length -1 ; i >= 0 ; i--){
     tmp.push(kata[i])
    }
     return tmp.join('')
  }

console.log(balikString('hello world!'))
