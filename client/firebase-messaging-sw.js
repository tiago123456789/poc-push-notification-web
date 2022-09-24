importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);
importScripts("/config.js")

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(
        payload.notification.title, {
            ...payload.notification
        }
    );
});