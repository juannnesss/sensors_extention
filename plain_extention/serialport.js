
document.getElementById('click').addEventListener('click',connectToPath)
var path = document.getElementById('device_input').value
console.log('serials script')

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

  function ab82str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }
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
                //var uint8array = new TextEncoder().encode(string);
                var string = ab2str(info.data)
                var string2 = ab82str(info.data)
                console.log('string',string)
                document.getElementById('textarea_conection_data').value = JSON.stringify({string,string2})
                
                
                
                
                
            })
        })
}