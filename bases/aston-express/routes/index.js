// aston-express/routes

// Public
// http://localhost:8080/lunchtime/menu
// http://localhost:8080/lunchtime/login
// http://localhost:8080/lunchtime/user/register

// Private
// http://localhost:8080/lunchtime/user/findall
// http://localhost:8080/lunchtime/order/cancel

const controllers = require('../controllers');

// http://localhost:8000/hello
app.get('/hello', controllers.hello);

// http://localhost:8000/lunchtime/test
lunchtime.get('/test', controllers.test);

// Others
require('./user');
