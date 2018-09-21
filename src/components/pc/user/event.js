import React from 'react';
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
                                    <ul className="m-dlist">
                                        <li className="itm">
                                            <div className="gface">
                                                <a href="/user/home?id=90262870" className="ficon">
                                                    <img src="http://p1.music.126.net/gVaOz5dnkiwN1ym83TLCVg==/109951163422755900.jpg?param=45y45" />
                                                </a>
                                            </div>
                                            <div className="gcnt">
                                                <div>
                                                    <div className="type f-pr f-fs1">
                                                        <a href="/user/home?id=90262870" className="s-fc7 fs-14px">元气少女小七</a>
                                                        <span className="sep s-fc3 fs-14px">分享单曲</span>
                                                    </div>
                                                    <div className="time">
                                                        <a className="s-fc4" data-action="logdetail" href="/event?id=3452845270&amp;uid=90262870">1月6日 08:08</a>
                                                    </div>
                                                    <div className="text f-fs1  f-brk j-text">SA打卡
                                                        <img src="http://s1.music.126.net/style/web2/emt/emoji_33.png" />
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <div className="src f-cb">
                                                                <div className="cover cover-ply">
                                                                    <span className="lnk">
                                                                        <img src="http://p1.music.126.net/dy1KyZH4VFfzA2yZKdZ1zQ==/109951163100798573.jpg?param=40y40&amp;quality=100" />
                                                                    </span>
                                                                    <a href="javascript:" data-log="event" data-event-id="3452845270" className="ply u-dicn u-dicn-8 f-alpha"
                                                                        data-res-action="play" data-res-type="18" data-res-id="528494292"></a>
                                                                </div>
                                                                <div className="scnt">
                                                                    <div className="tit f-thide f-fs1">
                                                                        <a href="/song?id=528494292" className="s-fc1" data-log="event" data-event-id="3452845270">一个叫南七技校的地方</a>
                                                                    </div>
                                                                    <div className="from f-thide s-fc3">
                                                                        <span className="s-fc3">俞涛</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doper">
                                                        <a href="javascript:" className="s-fc7" data-action="like">
                                                            <i className="icn u-dicn u-dicn-4"></i>
                                                            <span data-count="1">(1)</span>
                                                        </a>
                                                        <span className="line">|</span>
                                                        <a href="javascript:" className="s-fc7" data-action="forward">转发
                                                            <span className="f-hide" data-count="0">(0)</span>
                                                        </a>
                                                        <span className="line">|</span>
                                                        <a href="javascript:" className="s-fc7" data-action="comment">评论
                                                            <span className="f-hide" data-count="0">(0)</span>
                                                        </a>
                                                    </div>
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