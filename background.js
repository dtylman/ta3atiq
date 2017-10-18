async function pageActionClicked() {
    try {
        let tab = await browser.tabs.query({ currentWindow: true, active: true });
        if (tab.length == 0) {
            return;
        }
        browser.tabs.sendMessage(tab[0].id, {});
    }
    catch (e) {
        console.log(e);
    }
}

async function showPageAction(tabid) {
    try {
        await browser.pageAction.show(tabid);
    }
    catch (e) {
        console.log(e);
    }
}

function tabCreated(tab) {
    showPageAction(tab.id);    
}

function contentScriptInitialized(request, sender, sendResponse) {
    showPageAction(sender.tab.id);    
}

async function init() {
    try {
        browser.pageAction.onClicked.addListener(pageActionClicked);
        browser.tabs.onCreated.addListener(tabCreated);
        browser.runtime.onMessage.addListener(contentScriptInitialized);
    }
    catch (e) {
        console.log(e);
    }
}

init();