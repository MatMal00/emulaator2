const inputs = document.querySelectorAll('input');
const movBtn = document.querySelector('#movBtn');
const selectFrom = document.querySelector('#registersSelectFrom');
const selectTo = document.querySelector('#registersSelectTo');
const registerTitles = document.querySelectorAll('.registerListItemTitle');

let selectFromValue = selectTo.selectedOptions[0].value;
let selectToValue = selectFrom.selectedOptions[0].value;

const $hexRegex = /^[0-9a-fA-F]+$/;

const setActiveClass = tag =>
  tag.getAttribute('name') === selectFromValue || tag.getAttribute('name') === selectToValue
    ? tag.classList.add('activeTitle')
    : tag.classList.remove('activeTitle');

inputs.forEach(input =>
  input.addEventListener('blur', ({ target }) => {
    if (!$hexRegex.test(target.value)) {
      alert('Wrong input value !');
      movBtn.classList.add('hide');
    } else movBtn.classList.remove('hide');
  })
);

[selectFrom, selectTo].map((select, index) =>
  select.addEventListener('change', ({ target }) => {
    index === 0 ? (selectFromValue = target.value) : (selectToValue = target.value);
    registerTitles.forEach(tag => setActiveClass(tag));
  })
);

window.addEventListener('load', () => registerTitles.forEach(tag => setActiveClass(tag)));
