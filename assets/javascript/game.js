//Values at the beginning of a new game
var wins = 0;               //Number of times the player has correctly guessed the word
var currentWord;       //Current game word trying to be guessed
var remainingGuesses = 0;  //Number of chances the player has to figure out word
var lettersGuessed = [];    //letters player has guessed incorrectly
var guessingWord = [];      //Combination of "_" and letters player has guessed to build word

//List of possible words to be used for a game
var gameWords = ["Magic Kingdom", "EPCOT", "Hollywood Studios", "Animal Kingdom", "Mickey Mouse", "Donald Duck", "Fireworks"]; 

//This function is run whenever the user presses a key
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var playerGuess = event.key;

//displays number of wins
document.getElementById("winsTotal").innerHTML = wins;

//Chooses the word for the current game
currentWord = gameWords[Math.floor(Math.random() * gameWords.length) + 1];

//Shows " _ " for current game word
for (var i = 0; i < currentWord.length; i++) {
guessingWord.push(" _ ");
};
document.getElementById("currentWord").innerText = "";
for (var j = 0; j < guessingWord.length; j++) {
document.getElementById("currentWord").innerText += guessingWord[j];
};

//Shows how many guesses the player has left
document.getElementById("remainingGuesses").innerHTML += remainingGuesses;


//Adds playerGuess to the lettersGuessed array
lettersGuessed.push(" " + playerGuess);        
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    
    
//conditional that tells what to do when a key is pressed:
    //if key pressed is in word, replace " _ " in current word with correct letter
    if (playerGuess === currentWord.charAt()) {
        document.getElementById("lettersGuessed").innerHTML = guessingWord.push("playerGuess");
    };
    //if key pressed is not in word, add letter to lettersGuessed array and decrement remainingGuesses

    //if key pressed has already been guessed, do nothing

    //if key pressed is not a letter, do nothing

//conditional that tells what to do if remainingGuesses = 0:
    //Tells the player that their game is over

//conditional that tells what to do when the entire word has been guessed:
    //Tells the player if they've won
    
};

//Restarts a new game