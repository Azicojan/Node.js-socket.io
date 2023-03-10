const socket = io();
const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const userName = prompt('Your name:');
nameBlock.innerHTML = `${userName}`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value){
        socket.emit('chat message', {
            message: input.value,
            name: userName
        })
        input.value = '';
    }
});





socket.on('chat message', (msg)=> {

    const time = new Date();
    const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", day:'numeric', month: 'numeric', year:'numeric' });

    const item = document.createElement('li');
    item.innerHTML = `<span>${msg.name}</span>:${msg.message}<br>${formattedTime}`
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight)
})







