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
                <div className="main_width">
                    <div className="logo"></div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                        <Menu.Item key="1">发现音乐</Menu.Item>
                        <Menu.Item key="2">我的音乐</Menu.Item>
                        <Menu.Item key="3">朋友</Menu.Item>
                        <Menu.Item key="4">商城</Menu.Item>
                        <Menu.Item key="5">音乐人</Menu.Item>
                        <Menu.Item key="6">下载客户端</Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }
}

export default PCHeader = PCHeader;