const express = require('express');
const mongoose = require('mongoose');

//plugins
const port = 5007;
const db = "mongodb://localhost:27017/pallottiuser";

//middleware
const app = express();
app.use(express.json())

//database connection
mongoose.connect(db).then(() => {
    console.log('DB connected');
})

.catch((error) => {
    console.log(`DB connection failed ${error}`);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema)

app.get('/', (req, res) => {
    res.send("Route is working")
})

app.post('/createuser', async (req, res) => {
    try {
        const bodyData = req.body;
        const user = new User(bodyData);
        const userData = await user.save();
        res.send(userData)

    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

app.get('/selectuser', async (req, res) => {
    try {
        const userData = await User.find();
        res.send(userData)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
});