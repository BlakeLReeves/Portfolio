import * as express from 'express';
import * as passport from 'passport';

import emailRouter from './contact';

const apiRouter = express.Router();

apiRouter.use('/contact', emailRouter);

export default apiRouter;