import * as React from 'react';
import $ from 'jquery';

export interface IProjectCardProps {
    project: { id: number, name: string, github_link: string, website: string }
}

export interface IProjectCardState { isHidden: boolean; }

const Child = () => (
    <div className="modal fade" id={`exampleModal${this.props.project.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.props.project.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="text">Git Hub: <a href={this.props.project.github_link} target="_blank" rel="noopener noreferrer">{this.props.project.github_link}</a></div>
                    <div className="text">Website: <a href={this.props.project.website} target="_blank" rel="noopener noreferrer">{this.props.project.website}</a></div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
)

export default class IProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {
    constructor(props: IProjectCardProps) {
        super(props);
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: false
        })
    }

    render() {
        return (
            <>
                <div className="col-md-6">
                    <div className="card m-2 border border-info">
                        <div className="card-body">
                            <div className="card-title font-weight-bold border border-dark border-top-0 border-left-0 border-right-0">{this.props.project.name}</div>
                            <div className="text">
                                <button type="button" className="btn btn-primary mt-2" onClick={this.toggleHidden.bind(this)}>View</button>
                                {!this.state.isHidden && <Child />}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}