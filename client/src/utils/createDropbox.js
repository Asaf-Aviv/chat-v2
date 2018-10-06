const preventDefaults = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const addHighlights = (ele) => {
  ['dragenter', 'dragover'].forEach((eventName) => {
    ele.addEventListener(eventName, () => ele.classList.add('chat__box--highlited'));
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    ele.addEventListener(eventName, () => ele.classList.remove('chat__box--highlited'));
  });
};

const handleUpload = (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const room = document.querySelector('.room__tab.active');

  if (!room || !file) return;

  file.roomName = room.getAttribute('data-room');
  file.nickname = document.querySelector('.layout').getAttribute('data-nickname');

  const formData = new FormData();

  formData.append('file', file);
  formData.append('roomName', file.roomName);
  formData.append('nickname', file.nickname);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then(() => {})
    .catch(() => {});
};

export default (ele) => {
  ['dragenter', 'dragover', 'dragleave', 'drop']
    .forEach(eventName => ele.addEventListener(eventName, preventDefaults));

  addHighlights(ele);
  ele.addEventListener('drop', handleUpload);
};
