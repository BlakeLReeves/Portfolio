import * as React from 'react';

import PostProject from './PostProject';
import ViewProjects from './ViewProjects';

export interface IAdminProps { }

export interface IAdminState { }

export default class IAdmin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
    }
    render() { 
        return (
            <div className="container">
                <PostProject />
                <ViewProjects />
            </div>
        );
    }
}