
import store from './store'

var SerialPort = require("browser-serialport").SerialPort
let path ='/dev/cu.usbserial-14510'
var serialPort = new SerialPort(path, {
  baudrate: 9600
});



