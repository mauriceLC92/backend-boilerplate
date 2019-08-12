import * as express from 'express';

const app = express();

const port = 3004;

app.get('/', (req, res) => res.send('Hello Cape town'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
