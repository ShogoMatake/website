const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.menu-button');
const narrowScreen = matchMedia('(max-width: 640px)');
function updateMenu() {
  nav.classList.toggle('collapsed', narrowScreen.matches);
  menuButton.setAttribute('aria-expanded', String(!narrowScreen.matches));
}
updateMenu();
narrowScreen.addEventListener('change', updateMenu);
menuButton.addEventListener('click', () => {
  const collapsed = nav.classList.toggle('collapsed');
  menuButton.setAttribute('aria-expanded', String(!collapsed));
});
