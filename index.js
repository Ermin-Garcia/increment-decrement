const increase = document.querySelector('#increasebtn');
const reset = document.querySelector('#resetbtn');
const decrease = document.querySelector('#decreasebtn');
const cnt = document.querySelector('#countbtn');

let count = 0;

increase.addEventListener('click', ()=> {
 count += 1;
  cnt.innerHTML = count;
});
reset.addEventListener('click', ()=> {
 count = 0;
  cnt.textContent = count;
});
decrease.addEventListener('click', ()=> {
 count -= 1;
  cnt.textContent = count;
});