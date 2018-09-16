export const activateTab = (roomName) => {
  try {
    document.querySelectorAll('.roomtab')
      .forEach(tab => tab.classList.remove('roomtab--active'));

    document.querySelectorAll('.roomcontainer')
      .forEach(container => container.classList.remove('roomcontainer--active'));

    document.querySelector(`.roomtab[data-target="${roomName}"]`)
      .classList.add('roomtab--active');

    document.querySelector(`#${roomName}`)
      .classList.add('roomcontainer--active');
  } catch (e) { /* comment to silent eslint rule */ }
};

export const a = {};
