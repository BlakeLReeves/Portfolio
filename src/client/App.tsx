import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './public/Home';
import Contact from './public/Contact';
import Navbar from './shared/Navbar';

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
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }