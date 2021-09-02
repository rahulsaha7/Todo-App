import React from 'react';
import {Lead} from '../components/Lead.js'
import {Dashboard} from '../components/Dashboard.js'
import {Customers} from '../components/Customers.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const Main = () => {
    return (
        <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>

                            

                            <Route exact path="/Lead">
                                <Lead />
                            </Route>

                            <Route exact path='/Customer'>
                                <Customers />
                            </Route>

                        </Switch>
                    </div>
                </Router>   
        </div>
    )
}
