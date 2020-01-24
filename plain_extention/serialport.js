
document.getElementById('click').addEventListener('click',connectToPath)
var path = document.getElementById('device_input').value
console.log('serials script')

function connectToPath(){
    var pth = document.getElementById('device_input').value
    console.log('serialPort',pth)
    //chrome.serial.getDevices(function(connectionInfos){
    //    console.log('connectionInfos',connectionInfos)
    //})
    
    chrome.serial.connect(pth,{receiveTimeout:10000},
        function( connectionInfo) {
            console.log('Cnection info',connectionInfo)
            document.getElementById('textarea_conection').value = JSON.stringify(connectionInfo)
            chrome.serial.onReceive.addListener(function(info){
                console.log('onRecieve',info)
                document.getElementById('textarea_conection_data').value = JSON.stringify(info)
            })
        })
}