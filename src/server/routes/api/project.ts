import * as express from 'express';
import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const projectRouter = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

projectRouter.get('/', async (req, res, next) => {
    try {
        let projects = await DB.Projects.getAllProjects();
        res.send(projects);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

projectRouter.get('/:id?', async (req, res, next) => {
    try {
        let id = req.params.id;
        let [project] = await DB.Projects.getOneProject(id);
        res.send(project);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

projectRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let project = await DB.Projects.deleteProject(id);
        res.json({ message: 'Deleted!'});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

projectRouter.post('/', async (req, res, next) => {
    try {
        let name = req.body.name;
        let github_link = req.body.github_link;
        let website = req.body.website;
        let newProject = await DB.Projects.postProject(name, github_link, website);
        res.json({ message: 'Posted!'})
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

projectRouter.put('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let name = req.body.name;
        let github_link = req.body.github_link;
        let website = req.body.website;
        let newProject = await DB.Projects.updateProject(id, name, github_link, website);
        res.json({ message: 'Updated!'});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default projectRouter;