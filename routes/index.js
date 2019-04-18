const express = require('express');
const router = express.Router();
const {
    registerNewUser,
    fetchUserAchievements,
    fetchUsers,
    authLoginView,
    authLogin
} = require('../controllers/AuthController');
const { addNewAchievement, fetchAchievements } = require('../controllers/AchievementController');
const { checkUser, checkAdmin } = require('../middleware');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/register/user', checkUser({ role: 3 }), registerNewUser);
router.post('/add/achievement', checkUser({ role: 3 }), addNewAchievement);
router.post('/user/achievements', checkUser({ role: 1 }), fetchUserAchievements);
router.get('/users', checkAdmin, fetchUsers);
router.get('/users/:id', checkAdmin, fetchAchievements);
router.get('/login', authLoginView);
router.post('/login', authLogin);

module.exports = router;
