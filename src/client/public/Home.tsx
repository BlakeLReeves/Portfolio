import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 75,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#FFFFFF"
        },
        size: {
            value: 1.5
        },
        line_linked: {
            color: "#1295C7"
        }
    },
}

interface IHomeProps { }

interface IHomeState {
    name: string;
    show: boolean;
}

export default class IHome extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);

        this.state = {
            name: null,
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <>
                <div className="row fade-in">
                    <div className="col-md-12 moonlit-asteroid position-relative d-flex align-items-center justify-content-center">
                        <Particles
                            className="position-absolute"
                            params={particleOpt}
                            width={"1360"}
                        />
                        <div className="col-md-12">
                            <Fade left opposite when={this.state.show}>
                                <h1 className="text-white d-flex justify-content-center">Hello, my name is Blake Reeves.<br />I am a full-stack developer.</h1>
                            </Fade>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button
                                    className="btn btn-transparent btn-lg text-white border border-white"
                                    type="button"
                                    onClick={this.handleClick}
                                >
                                    {this.state.show ? 'Hide me...' : 'Meet me!'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}