import _ from 'lodash';

console.log(`I command thee Kneel`)
const img = document.querySelector('img');

let refreshButton = document.getElementById("refreshButton")
refreshButton.addEventListener("click" , displayNewImgRandomly )

  
let searchBox = document.getElementById("searchBox")
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click" , function (e) {
    console.log(`submit pressed`)
    console.log(`${searchBox.value}`);
    // return searchBox.valve;
})



    function displayNewImgRandomly() {
      // fetch('https://api.giphy.com/v1/gifs/translate?api_key=9YI8oJa8iE1iQVoOZrl0Lh0iffSffBPt&s=CATS', {mode: 'cors'})
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9YI8oJa8iE1iQVoOZrl0Lh0iffSffBPt&s=${searchBox.value}`, {mode: 'cors'})
      .then(function(response) {
          console.log(`number 1`)
        return response.json();
      })
      .then(function(response) {
          console.log(`number 2`) 
          img.src = response.data.images.original.url;
      })
      .catch(function() {
          console.log(`ERROR`)
      })
 

    }