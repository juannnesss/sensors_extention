<template>
<div>
  <p>{{ message }}</p>
  <div ><button @click="click">Button</button></div>
  </div>
</template>

<script>
var SerialPort = require("browser-serialport").SerialPort

//let path ='/dev/cu.usbserial-14510'
//var serialPort = new SerialPort(path, {
//  baudrate: 9600
//});
export default {
  methods: {
    click(){
      
      
      
      
      console.log('serial',serialPort)

     
    }
  },
  data () {
    return {
      message: "My new tab page"
    }
  },
  mounted(){
    console.log("Hlellog world lodg")
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>