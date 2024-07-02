const router = require('express').Router();

const { Sport } = require('../../db/models');




router.get('/', async (req, res) => {
    try {
        const sports = await Sport.findAll();

        res.json(sports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    // console.log(
    //     req.params,
    //     '+++++++++++++++++++++++++++++++++++++++++++req.params'
    // );
    if (isNaN(+id) === true) {
        return res.status(400).json({ message: 'ID не число' });
    }
    try {
        const sport = await Sport.findOne({ where: { id } });

        res.json(sport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name } = req.body;
// console.log(req.body,'+++++++++++++++++++++++++,req.body');
    try {
        const sport = await Sport.create({ name });
        res.json(sport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const sport = await Sport.destroy({ where: { id } });
        res.json(sport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const sport = await Sport.update({ name }, { where: { id } });
        res.json(sport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;












