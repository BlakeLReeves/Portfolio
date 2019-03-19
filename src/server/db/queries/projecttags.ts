import { Query } from '../index';

const getProjectTag = async (projectid: number) => Query(`SELECT t.name FROM ProjectTags pt JOIN Tags t ON t.id = pt.tagid WHERE pt.projectid = ?`, [projectid]);

const deleteProjectTag = async (projectid: number) => Query(`DELETE FROM ProjectTags WHERE projectid = ?`, [projectid]);

export default {
    getProjectTag,
    deleteProjectTag
}