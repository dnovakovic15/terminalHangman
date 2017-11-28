let letterArray = [];

function Letter(letter){
    this.letter = letter;
    this.correct = false;
} 

Letter.prototype.checkLetter = function(userWord){
    console.log('');

    for(let i = 0; i < userWord.length; i++){
        if(this.letter == userWord[i]){
            this.correct = true;
            break;
        }
    }
}

// Letter.prototype.print = function(){
//     if(this.correct){
//         return this.letter;
//     }
//     else{
//         return '_';
//     }
// }

module.exports = Letter;