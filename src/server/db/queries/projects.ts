import { Query } from '../index';

const getAllProjects = async () => Query(`SELECT * FROM projects`);

const getOneProject = async (id: number) => Query(`SELECT * FROM projects WHERE id = ?`, [id]);

const deleteProject = async (id: number) => Query(`DELETE FROM projects WHERE id = ?`, [id]);

const postProject = async (project: string, github_link: string, website: string) => Query(`INSERT INTO projects (project, github_link, website) VALUES ("${project}", "${github_link}", "${website}")`);

const updateProject = async (id: number, project: string, github_link: string, website: string) => Query(`UPDATE projects SET project = "${project}", github_link = "${github_link}", website = "${website}" WHERE id = ?`, [id]);

export default {
    getAllProjects,
    getOneProject,
    deleteProject,
    postProject,
    updateProject
}