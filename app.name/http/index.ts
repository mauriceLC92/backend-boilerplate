import * as express from 'express';
import domain from './domain';

const router = express.Router();

router.use(
  // '/test', can prefix a route here for example '/insurance'
  domain,
);

export default router;
