import _ from 'lodash'; 

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   console.log(`I command thee kneel`)
   return element;
 }

 document.body.appendChild(component());