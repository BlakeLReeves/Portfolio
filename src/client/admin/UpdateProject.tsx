import * as React from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface IUpdateProjectProps extends RouteComponentProps<{ id: string }> { }

export interface IUpdateProjectState {
    name: string;
    github_link: string;
    website: string;
}

export default class IUpdateProject extends React.Component<IUpdateProjectProps, IUpdateProjectState> {
    constructor(props: IUpdateProjectProps) {
        super(props);
        this.state = {
            name: null,
            github_link: null,
            website: null
        };

        this.handleEdit = this.handleEdit.bind(this);

    }

    async componentWillMount() {
        // if(!User || User.userid === null || User.role !== 'admin') {
        //     this.props.history.replace('/login');
        // }
        let id = this.props.match.params.id;

        try {
            let project = await json(`/api/projects/${id}`);
            this.setState({
                name: project.name,
                github_link: project.github_link,
                website: project.website,
            });
        } catch (e) {
            console.log(e);
        }
    }

    async handleEdit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let id = this.props.match.params.id;
        let data = {
            name: this.state.name,
            github_link: this.state.github_link,
            website: this.state.website,
        }

        try {

            let result = await json(`/api/projects/${id}`, 'PUT', data);
            if (result) {
                this.setState({
                    name: '',
                    github_link: '',
                    website: '',
                })

                this.props.history.replace('/projects');
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        const { name, github_link, website } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e) => this.handleEdit(e)} className="form-group m-2">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                                className="form-control d-block"
                                placeholder={name}>
                            </input>
                            <label>Git Hub:</label>
                            <input
                                type="text"
                                value={github_link}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ github_link: e.target.value })}
                                className="form-control d-block"
                                placeholder={github_link}>
                            </input>
                            <label>Website:</label>
                            <input
                                type="text"
                                value={website}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ website: e.target.value })}
                                className="form-control d-block"
                                placeholder={website}>
                            </input>
                            <div className="d-flex">
                                <button className="btn btn-info mt-2">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}