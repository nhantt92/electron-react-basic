const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron
const mongoose = require('mongoose');
const SerialPort = require('serialport');
const port = new SerialPort("COM4", { baudRate: 9600 });
const Readline = SerialPort.parsers.Readline;
const ByteLength = SerialPort.parsers.ByteLength;
const parser = new Readline('\r\n');
require('electron-reload')(__dirname)

let mainWindow;

mongoose.connect('mongodb://localhost/abc');
const Cat = mongoose.model('Cat', {name: String});

const kitty = new Cat({ name: 'nhantt'});
kitty.save().then(()=> console.log('yeah'));

port.pipe(parser);
parser.on('data', (data) => {
    var str = data.toString('utf8');
    console.log(str);
});
port.write('Node send\n');

app.on('ready', () => {

    mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

})

ipcMain.on('PING_TO_MAIN', (event, arg)=>{
    console.log(arg);
    mainWindow.send('MAIN_SEND', 'Ping rennder');
})