
const express = require('express');
const path = require('path');
const cors = require("cors");
const Joi = require('joi');



const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const cards = [
    {
        "_id":1,
        "title":"Blackjack",
        "description":"Have the highest score but don't go above 21",
        "img_name": "images/bj_project_image.jpg",
        "features": [
            "strategy",
            "luck",
            "multiplayer"
        ]
    },
    {
        "_id":2,
        "title": "Solitaire",
        "description":"A less stressfull and more skilled game",
        "img_name": "images/soli_project_image.jpg",
        "features":[
            "Patience",
            "Solo",
            "Skill"
        ]
    },
    {
        "_id":3,
        "title":"Poker",
        "description":"A multiplayer game that is fun with friends",
        "img_name":"images/poker_project_image.jpg",
        "features":[
            "Bluffing",
            "multiplayer",
            "High Stakes"
        ]
    },
    {
        "_id":4,
        "title":"Spades",
        "description": "A game of strategy",
        "img_name": "images/spades_project_image.jpg",
        "features":[
            "Team Play",
            "Strategy",
            "Trick-taking"
        ]
    },
    {
        "_id":5,
        "title":"Rummy",
        "description": "A game pairs and strategy",
        "img_name": "images/rummy.jpg",
        "features":[
            "Sequences",
            "Matching",
            "Strategy"
        ]
        
    },
    {
        "_id":6,
        "title":"Bridge",
        "description": "A game of teamwork",
        "img_name": "images/bridge.jpg",
        "features":[
            "Team Play",
            "Strategy",
            "Trick-taking"
        ]
    },
    {
        "_id":7,
    "title":"Gin-Rummy",
    "description": "A spinoff of Rummy",
    "img_name": "images/gin_rummy.jpg",
    "features":[
        "Quick thinking",
        "Strategy",
        "Rummy"
    ]
},
{  
    "_id":8,
"title":"Euchre",
"description": "A trick-taking game",
"img_name": "images/euchre.jpg",
"features":[
    "Team Play",
    "Strategy",
    "Trump"
]
}



];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'));
});

app.get("/api/cards", (req, res) => {
    res.json(cards);
});

const cardSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    image: Joi.string().uri().optional(),
    features: Joi.array().items(Joi.string()).optional(),
});

app.set("json spaces", 2);

app.use(express.static("public"));


app.post("/api/addCard", (req, res) => {
    const { error, value } = cardSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    const newCard = { ...value, _id: cards.length + 1};
    cards.push(newCard);
    res.json({ success: true, card: newCard});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
