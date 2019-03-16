import * as express from 'express';

import emailRouter from './contact';
import donatorRouter from './donate';
import projectRouter from './project';
import weatherRouter from './weather';

const apiRouter = express.Router();

apiRouter.use('/contact', emailRouter);
apiRouter.use('/donate', donatorRouter);
apiRouter.use('/projects', projectRouter);
apiRouter.use('/weather', weatherRouter);

export default apiRouter;