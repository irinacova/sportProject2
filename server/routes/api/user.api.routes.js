const router = require('express').Router();

const {User} = require('../../db/models')

// router.get('/', async (req, res) => {
//     try {
//         const data = await User.findAll(       
//         );
//         res.json(data);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        res.json(users);
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
        const user = await User.findOne({ where: { id } });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const {  firstName,
    lastName,
    email,
    password,
    age,
    photo } = req.body;
    // console.log(req.body,'+++++++++++++++++++++++++,req.body');
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            age,
            photo
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.destroy({ where: { id } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password, age, photo } = req.body;

    try {
        const user = await User.update({ firstName,
            lastName,
            email,
            password,
            age,
            photo }, { where: { id } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;




