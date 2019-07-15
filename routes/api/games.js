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

router.route('/:id').get((req, res) => {
    Game.findById(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
    Game.findByIdAndDelete(req.params.id)
        .then(() => res.json('Game Deleted'))
        .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/update/:id').post((req, res) => {
    Game.findById(req.params.id)
        .then(game => {
            game.title = req.body.title;
            game.description = req.body.description;
            game.date = Date.parse(req.body.date);

            game.save()
                .then(() => res.json('Game Updated!'))
                .catch(err => res.status(400).json('Error:'+ err));
        })
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;