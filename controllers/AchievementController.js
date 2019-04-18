const { achievementSchema } = require('../validation/schema');

module.exports = {
    addNewAchievement: async (req, res) => {
        try {
            await achievementSchema.isValid(req.body);
            const { name, description, user_id } = req.body;
            let query = `INSERT INTO achievements(name,description,user_id) VALUES(?,?,?)`;
            await db.query(query, [name, description, user_id]);
            return res.send('Success');
        } catch (error) {
            console.log(error);
        }
    },
    fetchAchievements: async (req, res) => {
        try {
            let query = `SELECT * FROM achievements WHERE user_id=?`;
            db.query(query, [req.params.id], (err, rows) => {
                res.render('user_achievements', { rows });
            });
        } catch (error) {
            console.log(error);
        }
    }
};
