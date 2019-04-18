const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    checkUser: ({ role }) => {
        let query = `select * from users where name=?`;
        return (req, res, next) =>
            db.query(query, [req.body.name], async (err, rows) => {
                try {
                    console.log(rows[0]);
                    await bcrypt.compare(req.body.password, rows[0].password);
                    if (rows[0].role !== role) {
                        throw Error('Not a User');
                    }
                    next();
                } catch (error) {
                    return res.send('Not Allowed');
                }
            });
    },
    checkAdmin: async (req, res, next) => {
        const token = req.cookies.token;
        if (token) {
            try {
                await jwt.verify(token, process.env.JWT_SECRET);
                next();
            } catch (error) {
                res.send('Not Allowed');
            }
        } else {
            res.send('Not Allowed');
        }
    }
};
