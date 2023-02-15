// TODO 1
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
    }

const onbirthdayEventListener = ({name}) => {
    birthdayEventListener(name);
}

    // TODO 2
    const myEmitter = new EventEmitter();
    
    // TODO 3
    myEmitter.on('birthday', onbirthdayEventListener);

    // TODO 4
    myEmitter.emit('birthday', { name: 'Rio' });

    /* 
    Perintah yang dijalankan :
    node ./events/index.js
    */