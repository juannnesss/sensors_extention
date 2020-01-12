
document.getElementById('click').addEventListener('click',click)

function click(){
    console.log('serialPort')
    chrome.serial.getDevices(function(connectionInfos){
        console.log('connectionInfos',connectionInfos)
    })
    let path ='/dev/cu.usbserial-14610'
    chrome.serial.connect(path,function (connectionInfo){
    console.log('hello',connectionInfo)
    })
}