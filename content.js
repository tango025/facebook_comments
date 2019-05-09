
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var vmcArray = $("._3tz_._7794 ._4sxc._42ft");
        var arr2 = $("._6w1q._77bi ._4sxc._42ft");
       
        executeArray(vmcArray,onceFinished);

            
    
        
        
        
            
            sendResponse({ proto: "protocol" });
    });


//          while (count < 4 && vmcArray.length != 0) {
            // for (var i = 0; i < vmcArray.length; i++)
            // {
            //     vmcArray[i].click();
            //     count++;
            // }
            //     vmcArray = $("._3tz_._7794 ._4sxc._42ft");
            // };

function executeArray(vmcArray,callback) {
    for (var i = 0; i < vmcArray.length; i++) {
        if (vmcArray.hasOwnProperty(i)) {
            (function (capI) {
                setTimeout(() => {
                    vmcArray[capI].click();
                }, 1000);
            })(i);
        }

    };
    callback();
}
function onceFinished(){
    var arr = $("._3tz_._7794 ._4sxc._42ft");
    if(arr.length){
        executeArray(arr,onceFinished);
        return undefined;
    }
}