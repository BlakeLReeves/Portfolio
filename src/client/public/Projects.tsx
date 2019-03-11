import * as React from 'react';
import { json } from '../utils/api';

import ProjectCard from './ProjectCard';

export interface IProjectsProps { }

export interface IProjectsState {
    projects: Array<{ id: number, name: string, github_link: string, website: string }>
}

export default class IProjects extends React.Component<IProjectsProps, IProjectsState> {
    constructor(props: IProjectsProps) {
        super(props);

        this.state = { projects: [] };
    }

    async componentDidMount() {
        try {
            let projects = await json('/api/projects');
            this.setState({ projects });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.projects.map(project => {
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
            </div>
        );
    }
}