
/*(async () => {

    chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab)=>{

        if (tab.url && tab.url.includes("youtube.com/watch")) {

            const response = await chrome.tabs.sendMessage(tabId, "update-tab")

            //console.log(tabId);
        }

    })

})();*/

