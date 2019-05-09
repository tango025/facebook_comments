
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var vmcArray = $("._3tz_._7794 ._4sxc._42ft");
            count = 0;
            while(count<4 && vmcArray.length != 0){
            for (var i = 0; i < vmcArray.length; i++)
            {
                vmcArray[i].click();
                count++;
            }
                vmcArray = $("._3tz_._7794 ._4sxc._42ft");
            };
            sendResponse({ proto: "protocol" });
    });

