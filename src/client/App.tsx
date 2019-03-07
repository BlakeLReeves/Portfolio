import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './public/Home';

export default class IApp extends React.Component<IAppProps, IAppState> {

    render () {
        return (
            <Router>
                <>
                    <div className="container-margin">
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }