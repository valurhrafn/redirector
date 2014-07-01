chrome.storage.sync.get({
    app_url: "https://dev.example.com",
    my_url: "http://www.example.com",
    identifier: "*://dev.example.com/*/article/*"
}, function (items) {
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
        var re = new RegExp(items.app_url, 'ig');
        return {
            redirectUrl: details.url.replace(re, items.my_url)
        };
    }, {
        urls: [items.identifier],
        types: ["main_frame", "sub_frame"]
    }, ['blocking']);
});







