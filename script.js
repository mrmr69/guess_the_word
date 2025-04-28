// Words & Attempts & hints
let wordList1 = [
  "apple", "gamer", "mouse", "chair", "plant", 
  "brush", "spear", "light", "stone", "watch",
  "happy", "juice", "knife", "lucky", "music",
  "ocean", "piano", "queen", "radio"
]; 
let hintList1 = [
  "fruit","person","animal or device","furniture","nature","tool",
  "weapon","energy","material","accessory","emotion",
  "drink","tool","fortune","art","water","musical instrument","royalty","device"
]
let actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
let maxAttempts = 15;
let attemptsRemaining = maxAttempts;

let wordList2 = [
  "flower", "spider", "turtle", "candle", "cookie", 
  "cheese", "winner", "winter", "summer", "sunset",
  "banana", "dragon", "guitar", "jacket", "kitten",
  "laptop", "mirror", "orange", "puzzle", "rocket"
];
let hintList2 = [
  "plant","insect","animal","light","food","dairy",
  "person","season","season","nature","fruit","animal",
  "musical instrument","clothing","animal","device","reflective surface","fruit","game","space vehicle"
]
let actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
let maxAttempts2 = 15;
let attemptsRemaining2 = maxAttempts2;

let wordList3 = [
  "bright", "zombie", "scream", "bridge", "danger", 
  "castle", "mirror", "puzzle", "rocket", "forest",
  "monkey", "secret", "shadow", "silver",
  "spirit", "sunset", "whisky", "yellow"
]; 
let hintList3 = [
  "light","monster","sound","structure","warning","building",
  "object","game","vehicle","nature","animal","hidden information",
  "dark","metal","ghost or essence","nature","drink","color"
]
let actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
let maxAttempts3 = 10;
let attemptsRemaining3 = maxAttempts3;


// Show/Hide levels
function goTo(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("play").style.display = "none";
  document.getElementById("level1").style.display = "none";
  document.getElementById("level2").style.display = "none";
  document.getElementById("level3").style.display = "none";

  document.getElementById(id).style.display = "block";
  document.getElementById('hintDisplay').textContent = '';

  if (id === "level1") {
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('restartBtn').style.display = "none";
    document.getElementById('successMessage').innerHTML = "";
    document.getElementById('successMessage').style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById('wordDisplay').innerHTML = "";
    document.getElementById('guessInput').value = '';
    document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + attemptsRemaining;
    attemptsRemaining = maxAttempts;
    actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
    document.getElementById('hintDisplay1').innerHTML = '';
    document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + maxAttempts;
    document.getElementById('submitBtn').style.display = "inline-block";
  }


    if (id === "level2") {
      document.getElementById('submitBtn2').disabled = false;
      document.getElementById('restartBtn2').style.display = "none";
      document.getElementById('successMessage2').innerHTML = "";
      document.getElementById('successMessage2').style.backgroundColor = "rgba(255, 255, 255, 0)";
      document.getElementById('wordDisplay2').innerHTML = "";
      document.getElementById('guessInput2').value = '';
      document.getElementById('attemptsDisplay2').innerHTML = "Attempts Left:" + attemptsRemaining2;
      attemptsRemaining2 = maxAttempts2;
      actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
      document.getElementById('hintDisplay2').innerHTML = '';
      document.getElementById('submitBtn2').style.display = "inline-block";
  }


  if (id === "level3") {
    document.getElementById('submitBtn3').disabled = false;
    document.getElementById('restartBtn3').style.display = "none";
    document.getElementById('successMessage3').innerHTML = "";
      document.getElementById('successMessage3').style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById('wordDisplay3').innerHTML = "";
    document.getElementById('guessInput3').value = '';
    document.getElementById('attemptsDisplay3').innerHTML = "Attempts Left:" + attemptsRemaining3;
    attemptsRemaining3 = maxAttempts3;
    actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
    document.getElementById('hintDisplay3').innerHTML = '';
    document.getElementById('submitBtn3').style.display = "inline-block";
  }
}

// Hint Function
function showHint() {
  let currentWord, hintDisplay, hint;

  if (document.getElementById('level1').style.display === "block") {
    currentWord = actualWord;
    hintDisplay = document.getElementById('hintDisplay1');
    let wordIndex = wordList1.indexOf(currentWord);
    hint = hintList1[wordIndex];
  } 
  else if (document.getElementById('level2').style.display === "block") {
    currentWord = actualWord2;
    hintDisplay = document.getElementById('hintDisplay2');
    let wordIndex = wordList2.indexOf(currentWord);
    hint = hintList2[wordIndex];
  } 
  else if (document.getElementById('level3').style.display === "block") {
    currentWord = actualWord3;
    hintDisplay = document.getElementById('hintDisplay3');
    let wordIndex = wordList3.indexOf(currentWord);
    hint = hintList3[wordIndex];
  }
  if (hintDisplay && currentWord && hint) {
    hintDisplay.innerHTML = hint;
  }

}

// LEVEL1
function checkGuess() {
  let guess = document.getElementById('guessInput').value.toLowerCase();
  let wordDisplay = document.getElementById('wordDisplay');
  let successMessage = document.getElementById('successMessage');
  let attemptsDisplay = document.getElementById('attemptsDisplay');
  let submitBtn = document.getElementById('submitBtn');
  let restartBtn = document.getElementById('restartBtn');
  
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
    successMessage.innerHTML = "✔️ Nice! You guessed the word, the next level has been unlocked🎉";
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    restartBtn.style.display = "inline-block";
    document.getElementById("level2Button").disabled = false;
    document.getElementById("level2Button").innerHTML = "Level 2"; 
    return;
  }
  
  attemptsRemaining--;
  if (attemptsRemaining >= 10){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: green;'>" + attemptsRemaining + '</span>';
  }else if(attemptsRemaining >= 5){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: orange;'>" + attemptsRemaining + '</span>';
  }else{
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: red;'>" + attemptsRemaining + '</span>';
  }


  if (attemptsRemaining == 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord.toUpperCase() + '</span>';
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }
}

function restartGame() {
  attemptsRemaining = maxAttempts;
  actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
  document.getElementById('guessInput').value = '';
  document.getElementById('wordDisplay').innerHTML = '';
  document.getElementById('successMessage').innerHTML = '';
  document.getElementById('successMessage').style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById('hintDisplay').textContent = '';
  document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + maxAttempts;
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('submitBtn').style.display = "inline-block";
  document.getElementById('restartBtn').style.display = "none";
  document.getElementById('hintDisplay1').textContent = '';

}

// LEVEL2
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
    successMessage.innerHTML = "✔️ Nice! You guessed the word, the next level has been unlocked🎉";
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    document.getElementById("level3Button").disabled = false;
    document.getElementById("level3Button").innerHTML = "Level 3"; 
    return;
  }

  attemptsRemaining2--;
  if (attemptsRemaining2 >= 10){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: green;'>" + attemptsRemaining2 + '</span>';
  }else if(attemptsRemaining2 >= 5){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: orange;'>" + attemptsRemaining2 + '</span>';
  }else{
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: red;'>" + attemptsRemaining2 + '</span>';
  }

  if (attemptsRemaining2 == 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord2.toUpperCase() + '</span>';
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }
}

function restartGame2() {
  attemptsRemaining2 = maxAttempts2;
  actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
  document.getElementById('guessInput2').value = '';
  document.getElementById('wordDisplay2').innerHTML = '';
  document.getElementById('successMessage2').innerHTML = '';
  document.getElementById('hintDisplay').textContent = '';
  document.getElementById('attemptsDisplay2').innerHTML = "Attempts Left:" + maxAttempts2;
  document.getElementById('successMessage2').style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById('submitBtn2').disabled = false;
  document.getElementById('submitBtn2').style.display = "inline-block";
  document.getElementById('restartBtn2').style.display = "none";
  document.getElementById('hintDisplay2').textContent = '';

}

// LEVEL3
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
    successMessage.innerHTML = "✔️ Nice! You guessed the word 🎉";
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    document.getElementById('lobbyMessage').innerHTML = " <img src='img/quby.gif'  style='width: 300px; height: auto; border-radius: 10px;' /> <br> 🎉 Congrats! You finished all the levels!";
    return;
  }

  attemptsRemaining3--;
  if (attemptsRemaining >= 7){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: green;'>" + attemptsRemaining3 + '</span>';
  }else if(attemptsRemaining3 >= 4){
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: orange;'>" + attemptsRemaining3 + '</span>';
  }else{
    attemptsDisplay.innerHTML = "Attempts Left:" +"<span style='color: red;'>" + attemptsRemaining3 + '</span>';
  }
  if (attemptsRemaining3 == 0) {
    successMessage.innerHTML = '❌ Game Over! The correct word was: <span style="color: green;">' + actualWord3.toUpperCase() + '</span>';
    successMessage.style.backgroundColor = "rgba(255,255,255,0.7)";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }
}

function restartGame3() {
  attemptsRemaining3 = maxAttempts3;
  actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
  document.getElementById('guessInput3').value = '';
  document.getElementById('wordDisplay3').innerHTML = '';
  document.getElementById('successMessage3').innerHTML = '';
  document.getElementById('hintDisplay').textContent = '';
  document.getElementById('successMessage3').style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById('attemptsDisplay3').innerHTML = "Attempts Left:" + maxAttempts3;
  document.getElementById('submitBtn3').disabled = false;
  document.getElementById('submitBtn3').style.display = "inline-block";
  document.getElementById('restartBtn3').style.display = "none";
  document.getElementById('hintDisplay3').textContent = '';

}
