// Function allowing us to display highscores
function printHighscores() {
  let highscores = JSON.parse(localStorage.getItem("highscores")) || []; // allowing us to retrieve this data from the lcoal storage 
  highscores.sort(function(a, b) { // Using .sort we are able to sort the high scores in a descending order
      return b.score - a.score;
  });


  // Using a for loop to iterate through the sorted high scores 

  let olElement = document.getElementById("highscores");
  highscores.forEach(function(score) {
      let liElement = document.createElement("li");
      liElement.textContent = score.name + " - " + score.score; 
      olElement.appendChild(liElement);
  });
}

// Creating a function to enable us to clear the highscores from the local storage
function clearHighscores() {
  localStorage.removeItem("highscores");
  window.location.reload();
}

// Event listener for the clear button
document.getElementById("clear").addEventListener("click", clearHighscores);

// Call the printHighscores to then display the scores when the page loads
printHighscores();