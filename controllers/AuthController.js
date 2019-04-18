const { authSchema } = require('../validation/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerNewUser: async (req, res) => {
        try {
            await authSchema.isValid(req.body);
            const { name, password } = req.body;
            let query = `INSERT INTO users(name,password,date_created,role) VALUES(?,?,?,?)`;
            const hashedPasword = await bcrypt.hash(password, 12);
            await db.query(query, [name, hashedPasword, new Date(), 3]);
            return res.send('Success');
        } catch (error) {
            console.log(error);
        }
    },
    fetchUserAchievements: async (req, res) => {
        try {
            await authSchema.isValid(req.body);
            let query = `SELECT * FROM users WHERE name=?`;
            let query_achievements = `SELECT * FROM achievements WHERE user_id=?`;
            db.query(query, [req.body.name], (err, rows) => {
                db.query(query_achievements, [rows[0].id], (err, rows) => {
                    res.send(rows);
                });
            });
        } catch (error) {
            console.log(error);
        }
    },

    fetchUsers: async (req, res) => {
        try {
            let query = `SELECT * FROM users`;
            db.query(query, (err, rows) => {
                res.render('users', { rows });
            });
        } catch (error) {
            console.log(error);
        }
    },
    authLoginView: (req, res) => {
        res.render('login');
    },
    authLogin: async (req, res) => {
        try {
            await authSchema.isValid(req.body);
            let query = `SELECT * FROM users WHERE name=?`;
            db.query(query, [req.body.name], async (err, rows) => {
                await bcrypt.compare(req.body.password, rows[0].password);
                if (rows[0].role !== 2) {
                    throw Error('Not a User');
                }
                const token = await jwt.sign(
                    {
                        name: req.body.name
                    },
                    process.env.JWT_SECRET
                );
                res.cookie('token', token);
                res.redirect('/users');
            });
        } catch (error) {
            console.log(error);
        }
    }
};
