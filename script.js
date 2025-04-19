//words&attempts
let wordList1 = ["apple", "gamer", "carot", "chair", "plant", "brush", "spear", "light", "stone", "watch"]; 
let actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
let maxAttempts = 15;
let attemptsRemaining = maxAttempts;
let wordList2 = ["flower", "spider", "turtle", "candle", "cookie", "cheese", "winner", "winter", "summer", "sunset"]; 
let actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
let maxAttempts2 = 15;
let attemptsRemaining2 = maxAttempts2;
let wordList3 = ["bright", "zombie", "scream", "bridge", "danger", "castle", "mirror", "puzzle", "rocket", "forest", "monkey"]; 
let actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
let maxAttempts3 = 10;
let attemptsRemaining3 = maxAttempts3;

//show&hide levels
function goTo(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("play").style.display = "none";
  document.getElementById("level1").style.display = "none";
  document.getElementById("level2").style.display = "none";
  document.getElementById("level3").style.display = "none";

  document.getElementById(id).style.display = "block";

  if (id === "level1") {
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('restartBtn').style.display = "none";
    document.getElementById('successMessage').innerHTML = "";
    document.getElementById('wordDisplay').innerHTML = "";
    document.getElementById('guessInput').value = '';
    document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + attemptsRemaining;
  }

  if (id === "level2") {
    document.getElementById('submitBtn2').disabled = false;
    document.getElementById('restartBtn2').style.display = "none";
    document.getElementById('successMessage2').innerHTML = "";
    document.getElementById('wordDisplay2').innerHTML = "";
    document.getElementById('guessInput2').value = '';
    document.getElementById('attemptsDisplay2').innerHTML = "Attempts Left:" + attemptsRemaining2;
  }

  if (id === "level3") {
    document.getElementById('submitBtn3').disabled = false;
    document.getElementById('restartBtn3').style.display = "none";
    document.getElementById('successMessage3').innerHTML = "";
    document.getElementById('wordDisplay3').innerHTML = "";
    document.getElementById('guessInput3').value = '';
    document.getElementById('attemptsDisplay3').innerHTML = "Attempts Left:" + attemptsRemaining3;
  }
}

//LEVEL1
function checkGuess() {
  let guess = document.getElementById('guessInput').value.toLowerCase();
  let wordDisplay = document.getElementById('wordDisplay');
  let successMessage = document.getElementById('successMessage');
  let attemptsDisplay = document.getElementById('attemptsDisplay');
  let submitBtn = document.getElementById('submitBtn');
  let restartBtn = document.getElementById('restartBtn');
  let nextBtn = document.getElementById('home');
  if (guess.length !== actualWord.length) {
    alert('Please enter a ' + actualWord.length + ' letter word.');
    return;
  }

  let resultHTML = '';
  for (let i = 0; i < actualWord.length; i++) {
    if (guess[i] === actualWord[i]) {
      resultHTML += '<span style="color: green;">' + guess[i].toUpperCase() + '</span>';
    } else {
      resultHTML += '<span style="color: red;">' + guess[i].toUpperCase() + '</span>';
    }
  }

  wordDisplay.innerHTML = resultHTML;
  document.getElementById('guessInput').value = '';

  if (guess === actualWord) {
    successMessage.innerHTML = "Nice! You guessed the word, the next level has been unlocked🎉";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    document.getElementById("level2Button").disabled = false;
    level2Button.innerHTML = "Level 2"; 

    return;
  }
  
  attemptsRemaining--;
  attemptsDisplay.innerHTML = "Attempts Left:"+attemptsRemaining;

  if (attemptsRemaining <= 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord.toUpperCase() + '</span>';
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }
}

function restartGame() {
  attemptsRemaining = maxAttempts;
  document.getElementById('guessInput').value = '';
  document.getElementById('wordDisplay').innerHTML = '';
  document.getElementById('successMessage').innerHTML = '';
  document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + maxAttempts;
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('restartBtn').style.display = "none";
  actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];

}
//LEVEL2
function checkGuess2() {
  let guess = document.getElementById('guessInput2').value.toLowerCase();
  let wordDisplay = document.getElementById('wordDisplay2');
  let successMessage = document.getElementById('successMessage2');
  let attemptsDisplay = document.getElementById('attemptsDisplay2');
  let submitBtn = document.getElementById('submitBtn2');
  let restartBtn = document.getElementById('restartBtn2');

  if (guess.length !== actualWord2.length) {
    alert('Please enter a ' + actualWord2.length + ' letter word.');
    return;
  }

  let resultHTML = '';
  for (let i = 0; i < actualWord2.length; i++) {
    if (guess[i] === actualWord2[i]) {
      resultHTML += '<span style="color: green;">' + guess[i].toUpperCase() + '</span>';
    } else {
      resultHTML += '<span style="color: red;">' + guess[i].toUpperCase() + '</span>';
    }
  }

  wordDisplay.innerHTML = resultHTML;
  document.getElementById('guessInput2').value = '';

  if (guess === actualWord2) {
    successMessage.innerHTML = "Nice! You guessed the word, the next level has been unlocked🎉";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    document.getElementById("level3Button").disabled = false;
    level3Button.innerHTML = "Level 3"; 
    return;
  }

  attemptsRemaining2--;
  attemptsDisplay.innerHTML = "Attempts Left: " + attemptsRemaining2;

  if (attemptsRemaining2 <= 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord2.toUpperCase() + '</span>';
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    
  }
}

function restartGame2() {
  attemptsRemaining2 = maxAttempts2;
  document.getElementById('guessInput2').value = '';
  document.getElementById('wordDisplay2').innerHTML = '';
  document.getElementById('successMessage2').innerHTML = '';
  document.getElementById('attemptsDisplay2').innerHTML = "Attempts Left:" + maxAttempts2;
  document.getElementById('submitBtn2').disabled = false;
  document.getElementById('restartBtn2').style.display = "none";
  actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];

}

//LEVEL3
function checkGuess3() {
  let guess = document.getElementById('guessInput3').value.toLowerCase();
  let wordDisplay = document.getElementById('wordDisplay3');
  let successMessage = document.getElementById('successMessage3');
  let attemptsDisplay = document.getElementById('attemptsDisplay3');
  let submitBtn = document.getElementById('submitBtn3');
  let restartBtn = document.getElementById('restartBtn3');

  if (guess.length !== actualWord3.length) {
    alert('Please enter a ' + actualWord3.length + ' letter word.');
    return;
  }

  let resultHTML = '';
  for (let i = 0; i < actualWord3.length; i++) {
    if (guess[i] === actualWord3[i]) {
      resultHTML += '<span style="color: green;">' + guess[i].toUpperCase() + '</span>';
    } else {
      resultHTML += '<span style="color: red;">' + guess[i].toUpperCase() + '</span>';
    }
  }

  wordDisplay.innerHTML = resultHTML;
  document.getElementById('guessInput3').value = '';

  if (guess === actualWord3) {
    successMessage.innerHTML = "Nice! You guessed the word 🎉";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    document.getElementById('lobbyMessage').innerHTML = " <img src='quby-quby-eating-watermelon.gif'  style='width: 300px; height: auto; border-radius: 10px;' /> <br> 🎉 Congrats! You finished all the levels!";
    return;
  }

  attemptsRemaining3--;
  attemptsDisplay.innerHTML = "Attempts Left: " + attemptsRemaining3;

  if (attemptsRemaining3 <= 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord.toUpperCase() + '</span>';
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    
  }
}

function restartGame3() {
  attemptsRemaining3 = maxAttempts3;
  document.getElementById('guessInput3').value = '';
  document.getElementById('wordDisplay3').innerHTML = '';
  document.getElementById('successMessage3').innerHTML = '';
  document.getElementById('attemptsDisplay3').innerHTML = "Attempts Left:" + maxAttempts3;
  document.getElementById('submitBtn3').disabled = false;
  document.getElementById('restartBtn3').style.display = "none";
  actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];

}
