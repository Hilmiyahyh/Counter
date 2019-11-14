let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');

let count = 0;

addCont.addEventListener('click', incrementCounter);
lowerCont.addEventListener('click', decrementCounter);

function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML>'0'){
    counter.style.color = '#4caf50'
  }
  else if(counter.innerHTML === '0'){
    counter.style.color = 'white';
  }
  counter.animate([
    {opacity: '0.2', color:'#4caf50'}, {opacity: '1.0', color: 'salmon'}],
    {duration: 1000, fill: 'forwards'});
}
function decrementCounter(){
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < '0'){
    counter.style.color = 'deeppink'
  }
  else if(counter.innerHTML === '0'){
    counter.style.color = 'white';
  }
  counter.animate([
    {opacity: '0.2', color:'deeppink'}, {opacity: '1.0', color: 'red'}],
    {duration: 1000, fill: 'forwards'});
}
