// Words & Attempts
let wordList1 = [
  "apple", "gamer", "mouse", "chair", "plant", 
  "brush", "spear", "light", "stone", "watch",
  "happy", "juice", "knife", "lucky", "music",
  "ocean", "piano", "queen", "radio"
]; 
let actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
let maxAttempts = 15;
let attemptsRemaining = maxAttempts;

let wordList2 = [
  "flower", "spider", "turtle", "candle", "cookie", 
  "cheese", "winner", "winter", "summer", "sunset",
  "banana", "dragon", "guitar", "jacket", "kitten",
  "laptop", "mirror", "orange", "puzzle", "rocket"
];
let actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
let maxAttempts2 = 15;
let attemptsRemaining2 = maxAttempts2;

let wordList3 = [
  "bright", "zombie", "scream", "bridge", "danger", 
  "castle", "mirror", "puzzle", "rocket", "forest",
  "monkey", "secret", "shadow", "silver",
  "spirit", "sunset", "whisky", "yellow"
]; 
let actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
let maxAttempts3 = 10;
let attemptsRemaining3 = maxAttempts3;

// Hints
let wordHints = {
  // Level 1 hints
  "apple": "fruit", 
  "gamer": "person",
  "mouse": "animal or device",
  "chair": "furniture",
  "plant": "nature",
  "brush": "tool",
  "spear": "weapon",
  "light": "energy",
  "stone": "material",
  "watch": "accessory",
  "happy": "emotion",
  "juice": "drink",
  "knife": "tool",
  "lucky": "fortune",
  "music": "art",
  "ocean": "water",
  "piano": "musical instrument",
  "queen": "royalty",
  "radio": "device",
  
  // Level 2 hints
  "flower": "plant",
  "spider": "insect",
  "turtle": "animal",
  "candle": "light",
  "cookie": "food",
  "cheese": "dairy",
  "winner": "person",
  "winter": "season",
  "summer": "season",
  "sunset": "nature",
  "banana": "fruit",
  "dragon": "animal",
  "guitar": "musical instrument",
  "jacket": "clothing",
  "kitten": "animal",
  "laptop": "device",
  "mirror": "reflective surface",
  "orange": "fruit",
  "puzzle": "game",
  "rocket": "space vehicle",
  
  // Level 3 hints
  "bright": "light",
  "zombie": "monster",
  "scream": "sound",
  "bridge": "structure",
  "danger": "warning",
  "castle": "building",
  "mirror": "object",
  "puzzle": "game",
  "rocket": "vehicle",
  "forest": "nature",
  "monkey": "animal",
  "secret": "hidden information",
  "shadow": "dark",
  "silver": "metal",
  "spirit": "ghost or essence",
  "sunset": "nature",
  "whisky": "drink",
  "yellow": "color"
};

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
    document.getElementById('wordDisplay').innerHTML = "";
    document.getElementById('guessInput').value = '';
    document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + attemptsRemaining;
    attemptsRemaining = maxAttempts;
    actualWord = wordList1[Math.floor(Math.random() * wordList1.length)];
    successMessage.style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById('hintDisplay1').textContent = '';
    document.getElementById('attemptsDisplay').innerHTML = "Attempts Left:" + maxAttempts;
    document.getElementById('submitBtn').style.display = "inline-block";
  }


    if (id === "level2") {
      document.getElementById('submitBtn2').disabled = false;
      document.getElementById('restartBtn2').style.display = "none";
      const successMsg2 = document.getElementById('successMessage2');
      successMsg2.innerHTML = "";
      successMsg2.style.backgroundColor = "";
      document.getElementById('wordDisplay2').innerHTML = "";
      document.getElementById('guessInput2').value = '';
      document.getElementById('attemptsDisplay2').innerHTML = "Attempts Left:" + attemptsRemaining2;
      attemptsRemaining2 = maxAttempts2;
      actualWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
      document.getElementById('hintDisplay2').textContent = '';
      document.getElementById('submitBtn2').style.display = "inline-block";
  }


  if (id === "level3") {
    document.getElementById('submitBtn3').disabled = false;
    document.getElementById('restartBtn3').style.display = "none";
    const successMsg3 = document.getElementById('successMessage3');
    successMsg3.innerHTML = "";
    successMsg3.style.backgroundColor = "";
    document.getElementById('wordDisplay3').innerHTML = "";
    document.getElementById('guessInput3').value = '';
    document.getElementById('attemptsDisplay3').innerHTML = "Attempts Left:" + attemptsRemaining3;
    attemptsRemaining3 = maxAttempts3;
    actualWord3 = wordList3[Math.floor(Math.random() * wordList3.length)];
    document.getElementById('hintDisplay3').textContent = '';
    document.getElementById('submitBtn3').style.display = "inline-block";
  }
}

// Hint Function
function showHint() {
  let currentWord, hintDisplay;

  if (document.getElementById('level1').style.display === "block") {
    currentWord = actualWord;
    hintDisplay = document.getElementById('hintDisplay1');
  } 
  else if (document.getElementById('level2').style.display === "block") {
    currentWord = actualWord2;
    hintDisplay = document.getElementById('hintDisplay2');
  } 
  else if (document.getElementById('level3').style.display === "block") {
    currentWord = actualWord3;
    hintDisplay = document.getElementById('hintDisplay3');
  }

  if (hintDisplay && currentWord) {
    hintDisplay.textContent = wordHints[currentWord];
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
  attemptsDisplay.innerHTML = "Attempts Left:" + attemptsRemaining;

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
  attemptsDisplay.innerHTML = "Attempts Left: " + attemptsRemaining2;

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
  attemptsDisplay.innerHTML = "Attempts Left: " + attemptsRemaining3;

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
