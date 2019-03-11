import * as React from 'react';

export interface IProjectCardProps {
    project: { id: number, name: string, github_link: string, website: string }
}

export interface IProjectCardState { }

export default class IProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {
    constructor(props: IProjectCardProps) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="card m-2 border border-info">
                    <div className="card-body">
                        <div className="card-title font-weight-bold border border-dark border-top-0 border-left-0 border-right-0">{this.props.project.name}</div>
                        <div className="text">Git Hub: <a href={this.props.project.github_link} target="_blank" rel="noopener noreferrer">{this.props.project.github_link}</a></div>
                        <div className="text">Website: <a href={this.props.project.website} target="_blank" rel="noopener noreferrer">{this.props.project.website}</a></div>
                    </div>
                </div>
            </div>
        );
    }
}