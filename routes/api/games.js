const router = require('express').Router();
let Game = require('../../models/game');

router.route('/').get((req, res) => {
    Game.find()
        .then(games => res.json(games))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newGame = new Game({
        title,
        description,
        date,
    });

    newGame.save()
    .then(() => res.json('Game added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;