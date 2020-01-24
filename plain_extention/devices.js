
document.getElementById('devices_button').addEventListener('click',getDevices)

function getDevices(){
    console.log('Getting devices Button')
    chrome.serial.getDevices(function(connectionInfos){
        document.getElementById('textarea_devices').value = JSON.stringify(connectionInfos)
        console.log('Getting devices',connectionInfos)
    })
    //let path ='/dev/cu.usbserial-14610'
    //chrome.serial.connect(path,function (connectionInfo){
    //console.log('hello',connectionInfo)
    //})
}