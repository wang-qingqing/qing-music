import React from 'react';
import ReactDOM from 'react-dom'; 
import {
   Layout,
   Menu,
   Breadcrumb,
   Icon
} from 'antd';
const {Header,Content,Footer,Sider} = Layout;


class PCHeader extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <Header className="header">
                <div className="main_area">
                    <div className="logo"></div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                        <Menu.Item key="1">
                            <a className="menu-a-style" href="/">发现音乐</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a className="menu-a-style" href="/my">我的音乐</a>                       
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a className="menu-a-style" href="/friend">朋友</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a className="menu-a-style" href="/store">商城</a>                       
                        </Menu.Item>
                        <Menu.Item key="5">
                            <a className="menu-a-style" href="/musician">音乐人</a>               
                        </Menu.Item>
                        <Menu.Item key="6">
                            <a className="menu-a-style" href="/download">下载客户端</a>                        
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }
}

export default PCHeader;