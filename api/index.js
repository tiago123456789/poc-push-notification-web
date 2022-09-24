const express = require("express");
const cors = require("cors")
const { sendMessage } = require("./services/notification");
const db = require("./config/database")
const app = express();

app.use(express.json())

app.use(cors("*"))

app.post("/notification-tokens", (req, res) => {
    const body = req.body;
    const notificationsCollections = db.collection("notifications_tokens")
    notificationsCollections.insert(body);
    return res.sendStatus(201)
})

app.get("/notification-tokens", (req, res) => {
    const notificationsCollections = db.collection("notifications_tokens")
    const registers = notificationsCollections.find({})
    return res.json(registers)
})

setInterval(async () => {
    const notificationsCollections = db.collection("notifications_tokens")
    const registers = notificationsCollections.find({})
    for (let index = 0; index < registers.length; index++) {
        const item = registers[index];
        await sendMessage(
            `Hi, Hola, Olá ${new Date()}`,
            "Three different ways say hello",
            item.token
        )
    }
}, (10 * 1000))

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`))


