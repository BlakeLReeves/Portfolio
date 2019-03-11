import * as React from 'react';

export interface IProjectsProps { }

export interface IProjectsState { }

export default class IProjects extends React.Component<IProjectsProps, IProjectsState> {
    constructor(props: IProjectsProps) {
        super(props);
        
    }
    render() { 
        return (
            <h1>hello</h1>
        );
    }
}