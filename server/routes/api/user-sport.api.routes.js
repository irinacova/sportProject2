const router = require('express').Router();

const { UserSport, User, Sport } = require('../../db/models');

router.get('/', async (req, res) => {
    try {
        const data = await UserSport.findAll({
            include: [Sport, User]
        });
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;
