import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Header, Footer
import Header from "../modules/User/components/Header"
import Footer from "../modules/User/components/Footer"

// Routes
import ROUTES from "../common/user_routes";

const UserRoutes = () => {
    return (
        <>
            <Header/>
                <Switch>
                    {
                        ROUTES.map(route => {
                            let routes = [];
                            // If this have sub routes
                            if(route.hasOwnProperty('subs') === true) {
                                route.subs.map(sub => {
                                    routes.push(<Route path={route.path + sub.path} component={sub.component} key={sub.key} />);
                                });
                            }

                            // Main route
                            routes.push(<Route exact path={route.path} component={route.component} key={route.key} />);
                            return routes;
                        })
                    }
                </Switch>
            <Footer />
        </>
    )
}

export default UserRoutes;