import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { json } from '../utils/api';

import Weather from './Weather';

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState {
    name: string;
    amount: string;
    donateStatus: string;
}

class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            name: "",
            amount: "",
            donateStatus: null
        };
    }

    private alert: JSX.Element = null;
    private donating: boolean = false;

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (this.donating) return;

        try {

            this.donating = true;
            let { token } = await this.props.stripe.createToken({ name: this.state.name });
            let amount = this.state.amount;
            let result = await json('/api/donate', 'POST', { token, amount });
            if (result) {
                this.setState({
                    name: "",
                    amount: "",
                    donateStatus: 'success'
                });
            } else {
                this.setState({ donateStatus: 'error' });
            }
        } catch (e) {
            this.setState({ donateStatus: 'error' });
            throw e;
        } finally {
            this.donating = false;
        }
    }

    render() {

        if (this.state.donateStatus === 'success') {
            this.alert = <div className='alert alert-success p-1 m-3' role='alert'>Donation Complete</div>
        } else if (this.state.donateStatus === 'error') {
            this.alert = <div className='alert alert-danger p-1 m-3' role='alert'>Error Processing the Donation</div>
        }

        return (
            <>
                <div className="grade-grey fade-in">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <form
                                    className="form-group mt-3 border border-info rounded p-3 bg-dark"
                                    onSubmit={this.handleSubmit}
                                >
                                    <label className="text-white">Name</label>
                                    <input
                                        type="text"
                                        className="input-group my-1 p-1 border border-info bg-light"
                                        value={this.state.name}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                                    />
                                    <label className="text-white">Amount</label>
                                    <input
                                        type="text"
                                        className="input-group my-1 p-1 border border-info bg-light"
                                        value={this.state.amount}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
                                    />
                                    <label className="text-white">CC Number -- Exp. Date -- CVC</label>
                                    <CardElement className="p-2 border border-info bg-light" />
                                    <button className="btn btn-info mt-3">Charge It!</button>
                                    {this.alert}
                                </form>
                            </div>
                            <Weather />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default injectStripe(Form);