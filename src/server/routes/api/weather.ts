import * as express from 'express';
import config from '../../config';
import 'isomorphic-fetch';

const weatherRouter = express.Router();

const API_KEY = config.weather.api_key;

weatherRouter.get('/', async (req, res, next) => {
    try {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=37174,us&appid=${API_KEY}`);
        const data = await api_call.json();
        res.send(data);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default weatherRouter;