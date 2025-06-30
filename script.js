const socket = io("https://a99ea844-b5cd-4c26-b215-26a30a2742d0-00-dgysv1t6dgvg.sisko.replit.dev", {
  transports: ["websocket"],
  withCredentials: false
});

// 🔢 Assign a random username like "User 1", "User 2", etc.
const username = `User ${Math.floor(Math.random() * 1000) + 1}`;

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit('chat message', `${username}: ${input.value}`);
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
});
