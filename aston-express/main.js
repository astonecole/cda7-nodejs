const morgan = require('morgan');

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

bodyParser = require('body-parser');
cors = require('cors');
express = require('express');
app = express();

lunchtime = express.Router();
lunchtime.use(cors());
lunchtime.use(bodyParser.urlencoded({ extended: true }));
lunchtime.use(bodyParser.json());

// Public Middlewares
app.use(morgan('tiny'));
app.use('/lunchtime', lunchtime);

require('./routes');

app.listen(8000);
