/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const {resolve} = require('path');

// Readable Stream
const readableStream = fs.createReadStream(resolve(__dirname,'input.txt'), {
    highWaterMark: 15
});

// Writable Stream
const writableStream = fs.createWriteStream(resolve(__dirname,'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        
    }
});

readableStream.on('end', () => {
    writableStream.end();
});

/* Perintah yang dijalankan :
node ./stream/index.js
*/