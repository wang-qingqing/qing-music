import React from 'react';
import moment from 'moment';
import {Layout,Collapse,Button,Icon} from 'antd';
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
        time: '2018-01-08 08:08:00',
        action: '分享单曲',
        shareText: '打卡',
        likeCount: 66,
        forwardCount: 12,
        commentCount: 10,
        original:{
            id: 123,
            name: '一个叫南七技校的地方',
            author: '俞涛',
            imgUrl: 'http://p1.music.126.net/dy1KyZH4VFfzA2yZKdZ1zQ==/109951163100798573.jpg?param=40y40&amp;quality=100'
        }
    },
    {
        time: '2017-02-10 22:19:00',
        action: '分享专辑',
        shareText: '',
        likeCount: 12,
        forwardCount: 78,
        commentCount: 9,
        original:{
            id: 666,
            name: '射雕英雄传',
            author: '罗文',
            imgUrl: 'http://p1.music.126.net/74X5FfsN6A_Wg1xvDgCfQQ==/79164837200575.jpg?param=40y40&quality=100'
        }
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
                            <Panel header={`我的动态（${eventList.length}）`} key="1">                                       
                                <div className="event-content">
                                    <ul className="m-dlist">
                                        {
                                            eventList && eventList.length ?
                                                eventList.map((event,key) => {
                                                    return (
                                                        <li className="itm" key={key} >
                                                            <div className="gface">
                                                                <a href={`/user/home?id=${currentUserInfo.id}`} className="ficon">
                                                                    <img src={currentUserInfo.url||''} />
                                                                </a>
                                                            </div>
                                                            <div className="gcnt">
                                                                <div>
                                                                    <div className="type f-pr f-fs1">
                                                                        <a href={`/user/home?id=${currentUserInfo.id}`} className="s-fc7 fs-14px">{currentUserInfo.name||''}</a>
                                                                        <span className="sep s-fc3 fs-14px">{event.action||''}</span>
                                                                    </div>
                                                                    <div className="time">        
                                                                        {moment(event.time).format("YYYY-MM-DD")} 
                                                                    </div>
                                                                    <div className="text f-fs1  f-brk j-text">
                                                                        {event.shareText||''}
                                                                    </div>
                                                                    {
                                                                        event.original?
                                                                            <div className="src f-cb">
                                                                                <div className="cover cover-ply">
                                                                                    <span className="lnk">
                                                                                        <img src={event.original.imgUrl} />
                                                                                    </span>
                                                                                    <a href="javascript:" className="ply u-dicn u-dicn-8 f-alpha"></a>
                                                                                </div>
                                                                                <div className="scnt">
                                                                                    <div className="tit f-thide f-fs1">
                                                                                        <a href={`/song?id=${event.original.id}`} className="s-fc1">{event.original.name}</a>
                                                                                    </div>
                                                                                    <div className="from f-thide s-fc3">
                                                                                        <span className="s-fc3">{event.original.author}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        :'' 
                                                                    }                                                        
                                                                    <div className="doper">
                                                                        <a href="javascript:" className="s-fc7">
                                                                            <Icon type="like" />                                                
                                                                            {
                                                                                event.likeCount ?
                                                                                    <span>({event.likeCount})</span>
                                                                                :''
                                                                            }
                                                                        </a>
                                                                        <span className="line">|</span>
                                                                        <a href="javascript:" className="s-fc7">
                                                                            转发
                                                                            {
                                                                                event.forwardCount ?
                                                                                    <span>({event.forwardCount})</span>
                                                                                :''
                                                                            }
                                                                        </a>
                                                                        <span className="line">|</span>
                                                                        <a href="javascript:" className="s-fc7">
                                                                            评论
                                                                            {
                                                                                event.commentCount ?
                                                                                    <span>({event.commentCount})</span>
                                                                                :''
                                                                            }
                                                                        </a>
                                                                    </div>
                                                                    {/* 评论区 TODO */}
                                                                    <div className="arrow u-dicn u-dicn-2" style={{display: 'block'}} data-action="unfold" title="动态管理">
                                                                        <ul className="mng f-hide">
                                                                            <li>
                                                                                <a href="javascript:" className="li f-fl s-fc3" data-action="delete">
                                                                                    <i className="icn u-dicn u-dicn-27 f-fl"></i>删除</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="dsup f-hide">赞：
                                                                        <span></span>
                                                                    </div>
                                                                    <div className="f-hide"></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )                                                   
                                                })
                                            :''
                                        }                                    
                                    </ul>
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