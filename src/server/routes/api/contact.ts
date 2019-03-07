import * as express from 'express';
import { sendEmail } from '../../utils/mailgun/emails';

const emailRouter = express.Router();

emailRouter.post('/', async (req, res, next) => {
    try {
        await sendEmail('blake.reeves19@gmail.com', req.body.from, req.body.subject, req.body.content);
        res.json({ message: "Sent!"});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default emailRouter;