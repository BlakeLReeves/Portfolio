import * as React from 'react';
import { json } from '../utils/api';
import { RouteComponentProps, withRouter } from 'react-router';

export interface IProjectCardProps extends RouteComponentProps {
    project: { id: number, name: string, github_link: string, website: string }
}

export interface IProjectCardState {
    tags: { name: string }[];
}

class IProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {
    constructor(props: IProjectCardProps) {
        super(props);
        this.state = {
            tags: []
        };
    }

    async componentWillMount() {
        let id = this.props.project.id;
        try {
            let tags = await json(`/api/projecttags/${id}`);

            this.setState({ tags });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="container fade-in">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card m-2 border border-info bg-dark">
                            <div className="card-body">
                                <div className="card-title text-white font-weight-bold border border-info border-top-0 border-left-0 border-right-0">{this.props.project.name}</div>
                                <div className="text text-white">Git Hub: <a href={this.props.project.github_link} target="_blank" rel="noopener noreferrer">{this.props.project.github_link}</a></div>
                                <div className="text text-white">Website: <a href={this.props.project.website} target="_blank" rel="noopener noreferrer">{this.props.project.website}</a></div>
                                <div className="card-footer border border-info border-bottom-0 border-left-0 border-right-0">
                                    {this.state.tags.map(tag => <span className="badge badge-info text-white border border-info mr-1">{tag.name}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Child = withRouter(IProjectCard);
export default Child;