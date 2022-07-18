let valid_input = false;
let number, input;
let totalGuess = [];


while (!valid_input) {
  input = window.prompt("Enter a valid and positive number!");

  number = Number(input);

  if (number != NaN && number > 0) {
    valid_input = true;
  }
}




const num = Math.floor(Math.random() * number) + 1;



function do_guess() {
  let guess = Number(document.getElementById("guess").value);

  let message = document.getElementById("message");

  if (guess == num) {
    message.innerHTML = `Great Guess! </br> It took you ${totalGuess.length+1} tries to guess the answer and your guesses were ${totalGuess}`
    console.log(`It took you ${totalGuess.length+ 1} guesses`);
    console.log(totalGuess);

    totalGuess = [];

  } else if (guess <= 0) {
    message.innerHTML = "That number is out of range, try again." //Guess is negative
  } else if (guess > number) {
    message.innerHTML = "That number is out of range, try again." // Guess is higher than the input
  } else if (guess > num) {
    message.innerHTML = "No, you guessed too high. Try a lower number!" // Guess is too high
    if (!totalGuess.includes(guess)) {
      totalGuess.push(guess);
    }

  } else if (guess < num) {
    message.innerHTML = "No, you guessed too low. Try a higher number!" // Guess is too low
    if (!totalGuess.includes(guess)) {
      totalGuess.push(guess);
    }
  } else {
    message.innerHTML = "Please enter a number!" //Guess is not a number

  }
}