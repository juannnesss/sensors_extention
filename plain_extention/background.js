



chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
  let path ='/dev/cu.usbserial-14510'
chrome.serial.connect(path,function (connectionInfo){
console.log('hello',connectionInfo)
})
});



