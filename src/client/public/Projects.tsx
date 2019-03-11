import * as React from 'react';
import { json } from '../utils/api';

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