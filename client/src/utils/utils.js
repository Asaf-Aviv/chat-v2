import socket from '../socket/socket';

export const activateTab = (roomName) => {
  try {
    document.querySelectorAll('.room__tab, .users__list, .messages__list')
      .forEach(el => el.classList.remove('active'));

    document.querySelectorAll(`
      .room__tab[data-room=${roomName}],
      .users__list[data-room=${roomName}],
      .messages__list[data-room=${roomName}]`)
      .forEach(el => el.classList.add('active'));

    document.querySelector('.chat__input__container')
      .setAttribute('data-room', roomName);

    document.querySelector('.room__tab__notifications').innerHTML = '';
  } catch (err) {
    /* comment to keep eslint happy */
  }
};

export const updateTabsOnLeave = (roomName) => {
  const oneTabIsActive = [
    ...document.querySelectorAll(`.room__tab:not([data-room=${roomName}])`)]
    .some(tab => tab.classList.contains('active'));

  if (oneTabIsActive) return;

  const firstTab = document.querySelectorAll(`.room__tab:not([data-room=${roomName}])`)[0];

  if (firstTab) {
    activateTab(firstTab.getAttribute('data-room'));
    return;
  }
  document.querySelector('.chat__input__container')
    .setAttribute('data-room', '');
};

export const changeStatus = () => socket.emit('userStatusChange');
