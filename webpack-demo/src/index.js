import _ from 'lodash';

console.log(`I command thee Kneel`)
const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=9YI8oJa8iE1iQVoOZrl0Lh0iffSffBPt&s=CATS', {mode: 'cors'})
    .then(function(response) {
        console.log(`number 1`)
      return response.json();
    })
    .then(function(response) {
        console.log(`number 2`) 
        img.src = response.data.images.original.url;
    })
    .catch(function(response) {
        console.log(`ERROR`)
    })
  