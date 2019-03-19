import * as express from 'express';
import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const projecttagRouter = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

projecttagRouter.get('/:projectid', async (req, res, next) => {
    let id = req.params.projectid;
    try {
        let tags = await DB.ProjectTags.getProjectTag(id);
        res.send(tags);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

projecttagRouter.delete('/:projectid', async (req, res, next) => {
    try {
        let projectid = req.params.projectid;
        let projecttag = await DB.ProjectTags.deleteProjectTag(projectid);
        res.json({ message: 'Deleted! '})
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default projecttagRouter;