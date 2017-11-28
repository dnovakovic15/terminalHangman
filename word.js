let dicitonary = ['food', 'dog', 'shoplifter', 'actor', 'derivative', 'magnets', 'computer', 'hacker', 'delightful', 'white', 'flute'];

function Word(){
    let randomWord;
}

Word.prototype.generate = function(){
    let random = Math.floor((Math.random() * 10));
    this.randomWord  = dicitonary[random];
    return this.randomWord;
}

module.exports = Word;