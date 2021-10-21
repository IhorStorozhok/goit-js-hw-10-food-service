import menu from './menu.json';
import menuItemCreature from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuListEl = document.querySelector('.js-menu');
const themeSwitcherEl = document.querySelector('.theme-switch__toggle');

menuListEl.insertAdjacentHTML('afterbegin', menuItemCreature(menu));

const themeAdderRemover = (el, add, remove) => {
  el.classList.add(add);
  el.classList.remove(remove);
};

const onCheckboxClicker = () => {
  if (themeSwitcherEl.checked) {
    themeAdderRemover(document.body, Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    themeAdderRemover(document.body, Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

const checkboxStatus = () => {
  localStorage.getItem('theme') === 'dark-theme'
    ? (themeSwitcherEl.checked = true)
    : (themeSwitcherEl.checked = false);
};

themeSwitcherEl.addEventListener('click', onCheckboxClicker);
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('theme')) {
    document.body.classList.add(localStorage.getItem('theme'));
    checkboxStatus();
  }
});
