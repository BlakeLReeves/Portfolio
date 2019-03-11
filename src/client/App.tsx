import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './public/Home';
import Contact from './public/Contact';
import Navbar from './shared/Navbar';
import Donate from './public/Donate';
import Projects from './public/Projects';

export default class IApp extends React.Component<IAppProps, IAppState> {

    render () {
        return (
            <Router>
                <> 
                    <Navbar />
                    <div className="container-margin">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/donate' component={Donate} />
                            <Route exact path='/projects' component={Projects} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }