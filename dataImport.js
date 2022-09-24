//SS-5a
// import fetch from 'node-fetch';
// const apiURL = 'https://swapi.dev/api/people'
// fetch(apiURL)
//   .then(res => res.json())
//   .then(json => console.log(json));
// console.log( 'Getting data');





//SS-5b
// import fetch from 'node-fetch';
// const apiURL = 'https://swapi.dev/api/people'
// fetch(apiURL)
//   .then(res => res.json())
//   .then(json => {
// console.log(json);
// console.log('all data was received successfully');
// });
// console.log('Getting data');

//SS-5c
import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people/2'
fetch(apiURL)
  .then(res => res.json())
  .then(json => {
console.log(json);
console.log('all data was received successfully');
});
console.log('Getting data');