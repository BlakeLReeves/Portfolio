import { Query } from '../index';

const getAllProjects = async () => Query(`SELECT * FROM projects`);

const getOneProject = async (id: number) => Query(`SELECT * FROM projects WHERE id = ?`, [id]);

const deleteProject = async (id: number) => Query(`DELETE FROM projects WHERE id = ?`, [id]);

const postProject = async (name: string, github_link: string, website: string) => Query(`INSERT INTO projects (name, github_link, website) VALUES ("${name}", "${github_link}", "${website}")`);

const updateProject = async (id: number, name: string, github_link: string, website: string) => Query(`UPDATE projects SET name = "${name}", github_link = "${github_link}", website = "${website}" WHERE id = ?`, [id]);

export default {
    getAllProjects,
    getOneProject,
    deleteProject,
    postProject,
    updateProject
}