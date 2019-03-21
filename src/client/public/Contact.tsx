import * as React from 'react';
import { json } from '../utils/api';

export interface IContactProps { }

export interface IContactState {
    from: string;
    subject: string;
    content: string;
    emailStatus: string;
}

export default class IContact extends React.Component<IContactProps, IContactState> {

    constructor(props: IContactProps) {
        super(props);

        this.state = {
            from: "",
            subject: "",
            content: "",
            emailStatus: null
        }
    }

    private alert: JSX.Element = null;
    private emailing: boolean = false;

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (this.emailing) return;

        try {

            this.emailing = true;
            let from = this.state.from;
            let subject = this.state.subject;
            let content = this.state.content;
            let result = await json('/api/contact', 'POST', { from, subject, content });
            if (result) {
                this.setState({
                    from: "",
                    subject: "",
                    content: "",
                    emailStatus: 'success'
                });
            } else {
                this.setState({ emailStatus: 'error' });
            }
        } catch (e) {
            this.setState({ emailStatus: 'error' });
            throw e;
        } finally {
            this.emailing = false;
        }
    }

    render() {

        if (this.state.emailStatus === 'success') {
            this.alert = <div className='alert alert-success p-1 m-3' role='alert'>Email Sent</div>
        } else if (this.state.emailStatus === 'error') {
            this.alert = <div className='alert alert-danger p-1 m-3' role='alert'>Error Sending Email</div>
        }

        return (
            <>
                <div className="grade-grey fade-in">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 border border-info bg-dark rounded mt-2">
                                <h1 className="text-white d-flex justify-content-center border border-top-0 border-left-0 border-right-0">CONTACT</h1>
                                <p className="text-info d-flex justify-content-center">Have a question or want to work together? Send me an email.</p>
                            </div>
                            <div className="col-md-12">
                                <form className="form-group mt-5 border border-info rounded p-3 shadow-lg bg-dark"
                                    onSubmit={this.handleSubmit}
                                >
                                    <label className="text-white">Email</label>
                                    <input type="text"
                                        value={this.state.from}
                                        className="input-group my-1 p-1 border-info"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ from: e.target.value })}
                                        placeholder="Enter your email"
                                    />
                                    <label className="text-white">Subject</label>
                                    <input type="text"
                                        value={this.state.subject}
                                        className="input-group my-1 p-1 border-info"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })}
                                        placeholder="Enter subject"
                                    />
                                    <label className="text-white">Message</label>
                                    <input type="text"
                                        value={this.state.content}
                                        className="input-group my-1 p-1 border-info"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ content: e.target.value })}
                                        placeholder="Enter message"
                                    />
                                    <button className="btn btn-info mt-2 shadow">Email Me</button>
                                    {this.alert}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}