import * as express from 'express';

import emailRouter from './contact';
import donatorRouter from './donate';

const apiRouter = express.Router();

apiRouter.use('/contact', emailRouter);
apiRouter.use('/donate', donatorRouter);

export default apiRouter;