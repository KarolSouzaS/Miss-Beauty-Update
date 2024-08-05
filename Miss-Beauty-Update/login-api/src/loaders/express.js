const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../models/routes');

module.exports = ({ app }) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api', routes);
};
