chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'new-moon',
        title: 'The new moon rises',
        contexts: ['page']
    }, () => {
        if (chrome.extension.lastError) {
            console.log(chrome.extension.lastError.message);
        }
    });
});

chrome.contextMenus.onClicked.addListener(async _ => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content-script.js']
    }, () => {
        if (chrome.extension.lastError) {
            console.log(chrome.extension.lastError.message);
        }
    });
});
