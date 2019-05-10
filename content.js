
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var vmcArray = $("._3tz_._7794 ._4sxc._42ft");
        var arr2 = $("._6w1q._77bi ._4sxc._42ft");
       
        executeArray(vmcArray);
        sendResponse({ proto: "protocol" });
    });

function executeArray(vmcArray) {
	console.log(typeof(vmcArray));
	//accessing array properties inside setTimeout
    for (var i = 0; i < vmcArray.length; i++) {
    	//to pass value of i
        if (vmcArray.hasOwnProperty(i)) {
        	//capI = captured value of i
            (function (capI) {
                setTimeout(() => {
                    vmcArray[capI].click();
                }, 1000);
            })(i);
        }

    };
    //callback();
}
function onceFinished(){
    var arr = $("._3tz_._7794 ._4sxc._42ft");
    if(arr.length){
        executeArray(arr,onceFinished);
        return undefined;
    }
}