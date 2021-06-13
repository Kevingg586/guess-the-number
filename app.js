
 
  const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: 40,
    prevGuesses: [],
   
    play: function() {
 
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
         
           do {
            this.prevGuesses.push(this.getGuess(this.secretNum));
          
            this.render();
            } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum); 
           
          
      },

    getGuess: function () {

       let guess;
        do {
            
           guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
           this.prevGuesses.push(guess);
           this.render(this.prevGuesses.slice(-1)[0], this.secretNum)
            }  while (isNaH(guess) || guess < this.smallestNum || guess > this.biggestNum || guess !== this.secretNum
            
            )
       return guess     
    }, 



render: function (guess, secretNum) { 
         
    if (guess < secretNum) {
        window.alert(`Your guess is too low  Previous guesses:${this.prevGuesses.join(', ')}`)

        this.getGuess()
    } else if (guess > secretNum) {
        window.alert(`Your guess is too high Previous guesses:${this.prevGuesses.join(', ')}`)

             this.getGuess
    } else if (guess == secretNum) {
        window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);
    }
  
},

    }; 
    game.play()

     

       
    
             
        
    
            
        
 
    
    
        

    
        
        
