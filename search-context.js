//
//Author: Faisal Sikder
//faisal.sikder@gmail.com
//

/*
Create the context menu
*/
chrome.contextMenus.create({
    "title": "Search Google for '%s'",
    "id": "search-context-extra",
    "contexts": ["selection"],
    "type": "normal"
}, function () {
    /* It is always a good idea to look for errors */
    if (chrome.runtime.lastError) {
        chrome.extension.getBackgroundPage().console.log('error in google search context');
    }
});

/*
On click listener
*/
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // change this engine if you want a different search engine
    const SEARCH_URL = 'https://www.google.com/search?q='

    /* Check which context-menu was triggered */
    if (info.menuItemId === 'search-context-extra') {
        /* Open a new tab */
        chrome.tabs.create({
            //info.selectionText gives you selected text
            url: SEARCH_URL+info.selectionText
        });
    }
});
