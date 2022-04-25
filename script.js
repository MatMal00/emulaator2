const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const movBtn = document.querySelector('#movBtn');
const selectFrom = document.querySelector('#registersSelectFrom');
const selectTo = document.querySelector('#registersSelectTo');
const registerTitles = document.querySelectorAll('.registerListItemTitle');

let selectedFromValue = selectFrom.selectedOptions[0].value;
let selectedToValue = selectTo.selectedOptions[0].value;

const $hexRegex = /^[0-9a-fA-F]+$/;

const setActiveClass = tag =>
  tag.getAttribute('name') === selectedFromValue || tag.getAttribute('name') === selectedToValue
    ? tag.classList.add('activeTitle')
    : tag.classList.remove('activeTitle');

form.addEventListener('submit', event => {
  event.preventDefault();

  const fromInputValue = Array.from(inputs).find(input => input.name === selectedFromValue).value;
  const toInput = Array.from(inputs).find(input => input.name === selectedToValue);
  toInput.value = fromInputValue;
});

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
    index === 0 ? (selectedFromValue = target.value) : (selectedToValue = target.value);
    registerTitles.forEach(tag => setActiveClass(tag));
  })
);

window.addEventListener('load', () => registerTitles.forEach(tag => setActiveClass(tag)));
