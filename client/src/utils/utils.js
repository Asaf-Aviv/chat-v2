export const activateTab = (roomName) => {
  try {
    document.querySelectorAll('.room__tab, .users__list, .messages__list')
      .forEach(el => el.classList.remove('active'));

    document.querySelectorAll(`
      .room__tab[data-room="${roomName}"],
      .users__list[data-room="${roomName}"],
      .messages__list[data-room="${roomName}"]`)
      .forEach(el => el.classList.add('active'));

    document.querySelector('.chat__input__container')
      .setAttribute('data-room', roomName);
  } catch (err) {
    /* comment to silent eslint rule */
  }
};

export const a = {};
