const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

express = require('express');
app = express();
lunchtime = express.Router();

// Public Middlewares
app.use(morgan('tiny'));
app.use('/lunchtime', lunchtime);

require('./routes');

app.listen(8000);
