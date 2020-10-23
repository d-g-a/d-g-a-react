import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'

function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route component={Home}  path="/" exact/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router
