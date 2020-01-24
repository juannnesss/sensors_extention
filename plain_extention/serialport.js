
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
                var buffer = info.data
                var dataView = new DataView(buffer)
                var int8View = new Int8Array(buffer)
                dataView.setInt32(0, 0x1234ABCD)
                var dataJson = {'1': dataView.getInt32(0).toString(16) ,'2': dataView.getInt8(0).toString(16),'3': int8View[0].toString(16)}
                document.getElementById('textarea_conection_data').value = JSON.stringify(dataJson)
                
                
                
                
                
            })
        })
}