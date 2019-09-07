import { loadRoutes } from '../../../shared/utils/http';
import * as express from 'express';

const router = express.Router();

loadRoutes(__dirname, router);

export default router;
