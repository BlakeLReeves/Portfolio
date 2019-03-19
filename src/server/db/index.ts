import * as mysql from 'mysql';
import config from '../config';

import Projects from './queries/projects';
import Tokens from './queries/tokens';
import Users from './queries/users';
import ProjectTags from './queries/projecttags';

export const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if(err) reject(err);
            return resolve(results);
        });
    });
};

export default {
    Projects,
    Tokens,
    Users,
    ProjectTags
}