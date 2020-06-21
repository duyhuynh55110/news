import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Header, Footer
import Header from "../modules/User/components/Header"
import Footer from "../modules/User/components/Footer"

// Routes
import routes from "../common/user_routes";

const UserRoutes = () => {
    return (
        <>
            <Header/>
                <Switch>
                    {
                        routes.map(route => {
                            return <Route path={route.path} component={route.component} />
                        })
                    }
                </Switch>
            <Footer />
        </>
    )
}

export default UserRoutes;