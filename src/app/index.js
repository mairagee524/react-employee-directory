import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { EmployeesList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Route 
            path="/" 
            exact component={EmployeesList} />
            {/* <Route
                path="/"
                component={() => (<h1>Hello</h1>)}
            /> */}
        </Router>
    )
}

export default App;
