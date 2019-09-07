import * as express from 'express';
import bodyParser = require('body-parser');

const app = express();
const routes = require('./api/routes');

app.use(
  '/v1',
  routes,
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
