const socket = io("wss://a99ea844-b5cd-4c26-b215-26a30a2742d0-00-dgysv1t6dgvg.sisko.replit.dev", {
  transports: ["websocket"],
  withCredentials: false
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
