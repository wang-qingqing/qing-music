import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import ExtendRoute from './extendRoute';
import NotFound from '../components/notFound';
import MobileMain from '../components/mobile/mobile_main';

//路由配置
const routes = [
    //首页
    {
        path: '/',
        exact: true,
        component: MobileMain,
    }
];


class MobileRoute extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, i) => (
                        <ExtendRoute key={i} {...route} />
                    ))}

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MobileRoute;
