import * as express from 'express';
import * as passport from 'passport';

import emailRouter from './contact';
import donatorRouter from './donate';
import projectRouter from './project';
import weatherRouter from './weather';
import projecttagRouter from './projecttags';

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

apiRouter.use('/contact', emailRouter);
apiRouter.use('/donate', donatorRouter);
apiRouter.use('/projects', projectRouter);
apiRouter.use('/weather', weatherRouter);
apiRouter.use('/projecttags', projecttagRouter);

export default apiRouter;