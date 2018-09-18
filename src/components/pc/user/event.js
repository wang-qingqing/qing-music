import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
import PCUserBriefCard from 'Components/pc/user/briefCard';
const {Footer} = Layout;
const {Panel} = Collapse;
import 'Style/common.scss';
import 'Style/pc/userEvent.scss';

const currentUserInfo = {
    id: 1,
    name: 'Lucky',
    url: './src/images/user/user1.png'
}

const eventList= [
    {
        id: 1,
        time: '2018-01-08 08:08:00',
        action: '分享单曲',
    },
]

const fansList = [
    {
        id: 1,
        name: 'Lwanyoz',
        url: './src/images/fans/fan1.jpg'
    },
    {
        id: 2,
        name: '甜度百分百qwq',
        url: './src/images/fans/fan2.jpg'
    },
    {
        id: 3,
        name: '-沐璃w',
        url: './src/images/fans/fan3.jpg'
    },
    {
        id: 41,
        name: '咖啡杯杯里的茶',
        url: './src/images/fans/fan4.jpg'
    }
]

export default class PCUserEvent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <PCHeader />
                
                <div className="user-content">
                    <PCUserHead />

                     <Collapse defaultActiveKey={["1"]}>   
                            <Panel header="我的动态（1）" key="1">                                       
                                <div className="event-content">
                                    
                                </div>

                                <div className="right-content">
                                    <PCUserBriefCard briefList={fansList} briefName="我的关注" />

                                    <PCUserBriefCard briefList={fansList} briefName="我的粉丝" />    
                                </div>
                            </Panel>  
                        </Collapse>  
                </div>
                
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
            </Layout>         
        )
    }
}