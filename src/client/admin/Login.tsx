import * as React from 'react';
import { json, SetAccessToken, User } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface ILoginProps extends RouteComponentProps { }

export interface ILoginState {
    email: string;
    password: string;
}

export default class ILogin extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    componentDidMount() {
        if (User && User.role == 'admin') {
            this.props.history.push('/admin');
        }
    }

    async handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            let result = await json('/auth/login', 'POST', {
                email: this.state.email,
                password: this.state.password
            });

            if (result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'admin') {
                    this.props.history.push('/admin');
                } else {
                    this.props.history.push('/');
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className="grade-grey fade-in">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={(e) => this.handleLoginSubmit(e)} className="form-group p-3 my-4 bg-white border border-primary">
                                <label>Email:</label>
                                <input
                                    className="form-control p-1 my-2"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}>
                                </input>
                                <label>Password:</label>
                                <input
                                    className="form-control p-1 my-2"
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })}
                                    type="password">
                                </input>
                                <button className="btn btn-primary mt-2">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}