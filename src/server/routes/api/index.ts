import * as express from 'express';

import emailRouter from './contact';
import donatorRouter from './donate';
import projectRouter from './project';

const apiRouter = express.Router();

apiRouter.use('/contact', emailRouter);
apiRouter.use('/donate', donatorRouter);
apiRouter.use('/projects', projectRouter);

export default apiRouter;