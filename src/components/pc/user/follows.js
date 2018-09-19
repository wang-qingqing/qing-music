import React from 'react';
import {Layout,Collapse,Button,Icon} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
const {Footer} = Layout;
const {Panel} = Collapse;
import 'Style/pc/userFans.scss';

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
    },
    {
        id: 41,
        name: '咖啡杯杯里的茶',
        url: './src/images/fans/fan4.jpg',
        event: 24,
        follows: 41,
        fans: 6,
        desc: '喜欢向日葵、小鹿和蒲公英，喜欢积极有生命力的事物。想要很多，实现的却不多，虽然我很笨，但我一直在路上。喜欢简单安静的生活。向太阳和生活致敬！',
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
                                <div className="user-fans-content">
                                    <ul>
                                        {
                                            followsList && followsList.length ?
                                                followsList.map((info,key) => {
                                                    return (
                                                        <li key={key}>
                                                            <a href={`/user/home?id=${info.id}`} className="ava f-pr" title={info.name||''}>
                                                                <img src={info.url||''} />
                                                            </a>
                                                            <div className="info">
                                                                <p>
                                                                    <a href={`/user/home?id=${info.id}`} className="s-fc7 f-thide fs-14px name" title={info.name||''}>
                                                                        {info.name||''}
                                                                    </a>
                                                                    <sup className="u-icn u-icn-84 "></sup>
                                                                    <i className="icn u-icn u-icn-s-00"></i>
                                                                </p>
                                                                <p>
                                                                    <a href={`/user/event?id=${info.id}`}>
                                                                        动态<em className="s-fc7">{info.event||0}</em>
                                                                    </a>
                                                                    <span className="line">|</span>
                                                                    <a href={`/user/follows?id=${info.id}`}>
                                                                        关注<em className="s-fc7">{info.follows||0}</em>
                                                                    </a>
                                                                    <span className="line">|</span>
                                                                    <a href={`/user/fans?id=${info.id}`}>
                                                                        粉丝<em className="s-fc7">{info.fans||0}</em>
                                                                    </a>
                                                                </p>
                                                                <p className="s-fc3 f-thide">
                                                                    {info.desc||''}
                                                                </p>
                                                            </div>
                                                            <div className="oper" id="oper_504044769">
                                                                {
                                                                  info.youFollowed ?
                                                                    <Button className="btn">
                                                                        <Icon type="mail" />发私信
                                                                    </Button>
                                                                  : ''  
                                                                }
                                                               
                                                                {
                                                                    info.followYou && info.youFollowed ?
                                                                        <p className="s-fc4">
                                                                            <Icon type="swap" />相互关注
                                                                        </p>
                                                                    : 
                                                                        info.youFollowed ?
                                                                            <p className="s-fc4">
                                                                                <Icon type="check" />已关注
                                                                            </p>
                                                                        :
                                                                            <Button className="btn">
                                                                                <Icon type="plus" />关注
                                                                            </Button> 
                                                                }                                                              
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                                
                                            : ''
                                        }                                      
                                    </ul>
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