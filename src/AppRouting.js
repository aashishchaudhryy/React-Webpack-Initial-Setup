import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from './container/auth/login/Login';
import axios from 'axios';

class AppRouting extends Component {
    render() {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
        }
        //code for protected routing before user authentication and token generation
        let routes = (
                <Switch>
                    <Route exact path="/login" component={Login} />
                    {/* <Route path="/register" component={Register} /> */}
                    <Redirect to="/login" />
                </Switch>
        );
        //code for protected routing after user gets authenticated and token is generated.
        // if (token) {
        //     routes = (
        //         <LoginProvider>
        //             <Switch>
        //                 <Route path="/home" component={Header} />
        //                 <Route path="/" exact component={Header} />
        //                 <Redirect to="/" />
        //             </Switch>
        //         </LoginProvider>
        //     );
        // }

        return (
            <React.Fragment>
                {routes}
            </React.Fragment>
        )
    }
}
export default withRouter(AppRouting);