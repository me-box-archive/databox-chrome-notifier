function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
}

function registerCallback(registrationId) {
    alert(registrationId);
    var views = chrome.extension.getViews({type: "popup"});
    for (var i = 0; i < views.length; i++) {
                views[i].document.getElementById('firebase_token').innerHTML=registrationId;
        }
    if (chrome.runtime.lastError) {
        // When the registration fails, handle the error and retry the
        // registration later.
        return;
    }

    // Send the registration token to your application server.
    sendRegistrationId(function (succeed) {
        // Once the registration token is received by your server,
        // set the flag such that register will not be invoked
        // next time when the app starts up.
        //if (succeed)
        chrome.storage.local.set({ registered: true });
    });
}

function sendRegistrationId(callback) {
    // Send the registration token to your application server
    // in a secure way.
}

function firstTime() {
    alert("start");
    chrome.storage.local.get("registered", function (result) {
        // If already registered, bail out.
        if (result["registered"])
            return;

        // Up to 100 senders are allowed.
        var senderIds = getSenders();
    alert(senderIds[0]);
        chrome.gcm.register(senderIds, registerCallback);
    });
}

chrome.gcm.onMessage.addListener(function (message) {
    chrome.notifications.create(getNotificationId(), {
        title: message.data['gcm.notification.title'],
        type: "basic",
        iconUrl: 'gcm_128.png',
        message: message.data['gcm.notification.body']
    }, function () { });
});

chrome.runtime.onStartup.addListener(firstTime);
chrome.runtime.onInstalled.addListener(firstTime);