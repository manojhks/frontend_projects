const sentence='The quick brown fox jumps over the lazy dog'
const word='fox'
const includes=(sentence,word)=>{
    return sentence.includes(word)
}
console.log(includes(sentence,word))