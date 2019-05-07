document.addEventListener('DOMContentLoaded', function () {
    $("#count1").click(()=>sendMessage());
    let url = "https://www.facebook.com/indiatvnews/posts/2456546907734921";
function sendMessage(){
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let tab = tabs[0];
        chrome.tabs.update(tab.id, { url }, () => {
            chrome.tabs.onUpdated.addListener(function listener(tabid, changedInfo) {
                //listener for when loading is complete
                if (changedInfo.status === "complete" && tabid === tab.id) {
                    //remove listener once the page is loaded
                        chrome.tabs.onUpdated.removeListener(listener);
                        chrome.tabs.sendMessage(tabs[0].id, { greeting: "URL LOADED" },(response)=>{
                            console.log(response.proto);
                        })
                    }
                })
            })
        })
    }
})    
