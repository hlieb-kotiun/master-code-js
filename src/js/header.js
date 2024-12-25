const desktopHeaderWrapper = document.querySelector(
  '.desktop-header-nav-wrapper'
);
const desktopHeaderList = document.querySelector('.desktop-header-list');

desktopHeaderWrapper.addEventListener('click', menuControl);

function menuControl(evevt) {
  const menuClick = evevt.target.nodeName;
  console.log(menuClick);

  if (menuClick !== 'A' && menuClick !== 'BUTTON') {
    return;
  }
  if (desktopHeaderList.classList.contains('close')) {
    desktopHeaderList.classList.remove('close');
  } else {
    desktopHeaderList.classList.add('close');
  }
}
