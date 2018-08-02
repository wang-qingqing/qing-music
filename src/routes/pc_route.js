import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import Loadable from "react-loadable";
import ExtendRoute from 'Routes/extendRoute';
import NotFound from 'Components/notFound';

//定义加载中的展示效果
const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
}

//菜单上的组件
//首页
const PCMain = Loadable({
    loader: () => import("Components/pc/pc_main"),
    loading: MyLoadingComponent
});
 
//列表
const PCTopList = Loadable({
    loader: () => import("Components/pc/pc_topList"),
    loading: MyLoadingComponent
});

//用户主页
const PCUserHome = Loadable({
    loader: () => import("Components/pc/user/home"),
    loading: MyLoadingComponent
});

//用户等级
const PCUserLevel = Loadable({
    loader: () => import("Components/pc/user/level"),
    loading: MyLoadingComponent
});

//代办事项
const PCTodoItems = Loadable({
    loader: () => import("Components/pc/todoList/pc_todoItems"),
    loading: MyLoadingComponent
});

//删除功能
const CustomDelete = Loadable({
    loader: () => import("Components/pc/deleteFunction/customDelete"),
    loading: MyLoadingComponent
});



//路由配置
const routes = [
    //首页
    {
        path: '/',
        exact: true,
        component: PCMain
    },
    //列表
    {
        path: '/list',
        exact: true,
        component: PCTopList
    },
    //用户主页
    {
        path: '/user/home',
        exact: true,
        component: PCUserHome
    },
    //用户等级
    {
        path: '/user/level',
        extra: true,
        component: PCUserLevel
    },
    //代办事项
    {
        path: '/todo',
        exact: true,
        component: PCTodoItems
    },
    //删除功能
    {
        path: '/del',
        exact: true,
        component: CustomDelete
    },
];

//TODO  
// <Redirect from="/my/tologin" to="/my" />

class PCRoute extends React.Component{
    render(){
        return (
            routes.length?
                <HashRouter>
                    <Switch>
                        {routes.map((route, i) => (
                            <ExtendRoute key={i} {...route} />
                        ))}

                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            : ''
        )
    }
}

export default PCRoute;
