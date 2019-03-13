import * as React from 'react';
import { User } from '../utils/api';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import PostProject from './PostProject';
import ViewProjects from './ViewProjects';

export interface IAdminProps extends RouteComponentProps { }

export interface IAdminState { }

class IAdmin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
    }

    componentWillMount() {
        if (!User || User.userid === null || User.role !== 'admin') {
            this.props.history.replace('/login');
        }
    }

    render() {
        return (
            <div className="container">
                <Link onClick={() => { localStorage.clear(); this.props.history.replace('/'); window.location.reload() }} to="/" className="nav-link btn btn-info col-sm-2 mt-2">Logout</Link>
                <PostProject />
                <ViewProjects />
            </div>
        );
    }
}

const Child = withRouter(IAdmin as any);
export default Child;