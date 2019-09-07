import * as express from 'express';
import domain from './domain';
const router = express.Router();

router.use(
  domain,
);
