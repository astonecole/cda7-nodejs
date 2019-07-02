// routes/user.js

const controllers = require('../controllers/user');

user = express.Router();
lunchtime.use('/user', user);

// http://localhost:8000/lunchtime/login
lunchtime.post('/login', controllers.login);

// http://localhost:8000/lunchtime/user/register
user.post('/register', controllers.register);
