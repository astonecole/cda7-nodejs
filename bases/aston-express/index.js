const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

Sequelize = require('sequelize');
sequelize = new Sequelize('mysql://root:root@localhost:3306/lunchtime', {
    define: {
        timestamps: false
    }
});

sequelize
    .authenticate()
    .then(
        () => {
            console.log('Connection has been established successfully.');
        },
        err => {
            console.error('Unable to connect to the database: ', err.message);
        }
    );

express = require('express');
app = express();
lunchtime = express.Router();

// Public Middlewares
app.use(morgan('tiny'));
app.use('/lunchtime', lunchtime);

require('./routes');

app.listen(8000);
