import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
import PCUserFollowCard from 'Components/pc/user/followCard';
const {Footer} = Layout;
const {Panel} = Collapse;

const followsList = [
    {
        id: 1,
        name: 'Lwanyoz',
        url: './src/images/fans/fan1.jpg',
        event: 216,
        follows: 32,
        fans: 5,
        desc: '我没喜欢猫 我只喜欢你',
        youFollowed: true,
        followYou: false
    },
    {
        id: 2,
        name: '甜度百分百qwq',
        url: './src/images/fans/fan2.jpg',
        event: 0,
        follows: 4,
        fans: 2,
        desc: '原来是可爱的你来了鸭qwq///',
        youFollowed: true,
        followYou: true
    },
    {
        id: 3,
        name: '-沐璃w',
        url: './src/images/fans/fan3.jpg',
        event: 5,
        follows: 14,
        fans: 14799,
        desc: '心 如 明 月 意 朦 胧',
        youFollowed: true,
        followYou: false
    }
]

export default class PCUserFollows extends React.Component{
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
                            <Panel header={`关注（${followsList.length}）`} key="1">                                       
                                <PCUserFollowCard followsList={followsList} />
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