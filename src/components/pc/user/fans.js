import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
import PCUserFollowCard from 'Components/pc/user/followCard';
const {Footer} = Layout;
const {Panel} = Collapse;

const fansList = [
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
        id: 41,
        name: '咖啡杯杯里的茶',
        url: './src/images/fans/fan4.jpg',
        event: 24,
        follows: 41,
        fans: 6,
        desc: '喜欢向日葵、小鹿和蒲公英，喜欢积极有生命力的事物。想要很多，实现的却不多，虽然我很笨，但我一直在路上。喜欢简单安静的生活。向太阳和生活致敬！',
        youFollowed: false,
        followYou: true
    }  
]

export default class PCUserFans extends React.Component{
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
                            <Panel header={`粉丝（${fansList.length}）`} key="1">                                       
                                <PCUserFollowCard followsList={fansList} />
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