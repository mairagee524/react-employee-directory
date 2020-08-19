import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { EmployeesList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={EmployeesList} />
                {/* <Route
                    path="/"
                    component={() => (<h1>Hello</h1>)}
                /> */}
            </Switch>
        </Router>
    )
}

export default App;
