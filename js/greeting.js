const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CL = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CL);
  form.addEventListener('submit', handleSubmit);
}

function changeGreeting(event) {
  event.preventDefault();
  form.classList.add(SHOWING_CL);
  greeting.classList.remove(SHOWING_CL);
  localStorage.removeItem(USER_LS);
}

function paintGreeting(text) {
  const changeName = document.createElement('button');
  changeName.innerHTML = '🖍';
  changeName.className = 'changeName__button';
  changeName.addEventListener('click', changeGreeting);
  form.classList.remove(SHOWING_CL);
  greeting.classList.add(SHOWING_CL);
  greeting.innerText = `Hello! ${text}.`;
  greeting.appendChild(changeName);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
