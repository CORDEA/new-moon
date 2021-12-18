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
