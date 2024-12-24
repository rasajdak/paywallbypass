chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removePaywall
    });
});

function removePaywall() {
    document.querySelectorAll('.paywall-content').forEach(element => {
        element.style.display = 'block';
    });
}
