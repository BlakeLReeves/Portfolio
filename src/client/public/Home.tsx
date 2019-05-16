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
                <div className="row fade-in moonlit-asteroid">
                    <div className="col-md-12 position-relative d-flex align-items-center justify-content-center">
                        <Particles
                            className="position-absolute"
                            params={particleOpt}
                            width={"1360"}
                        />
                        <div className="col-md-12">
                            <Fade left opposite when={this.state.show}>
                                <h3 className="text-white d-flex justify-content-center">Hello, my name is Blake Reeves.<br />I am a full-stack developer.</h3>
                                <p className="text-white d-flex justify-content-center">
                                I am a graduate of Covalence's online coding bootcamp based out of<br />
                                Birmingham, AL, and a graduate from an accredited university with a<br />
                                Bachelor of Arts degree.
                                </p>
                                <p className="text-white d-flex justify-content-center">
                                I am looking for new work opportunities. Take a look around my page,<br />
                                and if you think I am a good fit, contact me through the contact form.
                                </p>
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