const firebaseApp = require("../config/firebase")
const { getMessaging } = require("firebase-admin/messaging")
const messaging = getMessaging(firebaseApp)

const sendMessage = (title, body, token) => {
    return messaging.send({
        webpush: {
            notification: {
                title,
                body,
            },
        },
        token
    })
}

const sendMessageToTopic = (title, body, topic) => {
    return messaging.send({
        webpush: {
            notification: {
                title,
                body,
            },
        },
        topic
    })
}

module.exports = { sendMessage, sendMessageToTopic }