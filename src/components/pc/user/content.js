import React from 'react';
import {Tag,Icon,Button} from 'antd';
import SongRank from 'Components/pc/song/rank';
import SongSheet from 'Components/pc/song/sheet';

import "Style/pc/home.scss";
import "Style/pc/userCard.scss";

const userInfo = { //用户的相关信息
    userId: 123,//用户id
    name:'Lucky',//用户名
    headSrc: '../src/images/user/user1.png',//头像
    level: 8, //等级
    sex: 2,//性别 1男2女
    eventCount: 10, //动态
    followCount: 100, //关注
    fansCount: 66 //粉丝
}

const cardList = [
    {
        title: '本宝宝终于找到了适合自己的BGM',
        src: './src/images/list/list1.png',
        listen: '1234'         
    },
    {
        title: '比起说我爱你 我更希望有机会说我也爱你',
        src: './src/images/list/list2.png',
        listen: '666'         
    },
    {
        title: '『古风·遇梦』听梦不愿醒 便随你风月无际',
        src: './src/images/list/list3.png',
        listen: '1234'         
    },
    {
        title: '你是一首旋律，被写在春天的风里',
        src: './src/images/list/list4.png',
        listen: '1'         
    },
    {
        title: '你是我不想醒过来的白日梦',
        src: './src/images/list/list5.png',
        listen: '35'         
    }
]

export default class PCUserHomeContent extends React.Component{
    render(){
        return (
            <div className="user-content">
                <div className="userInfo">
                    <div style={{width: '260px',float:'left'}}>
                        <img className="head" src={userInfo.headSrc} />
                    </div>

                    <div className="userCard_area home-userInfo">
                        <div className="txt-l home-name">
                            <strong>{userInfo.name}</strong>
                            <Tag style={{marginLeft: '10px'}}>
                                <a href="./#/user/level">Lv.{userInfo.level}</a>
                            </Tag>
                            {
                                userInfo.sex == 2 ?
                                    <Icon type="woman" style={{color: 'pink'}} />
                                    : userInfo.sex == 1 ?
                                        <Icon type="man" style={{color: 'lightblue'}} />
                                    :''
                            }

                            <Button className="fr">
                                编辑个人资料
                            </Button>                          
                        </div>
                        
                        <div className="userCard_bottom">            
                            <ul>
                                <li className="first">
                                    <a href="/user/event">
                                        <strong>{userInfo.eventCount}</strong>
                                        <div>动态</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/follows">
                                        <strong>{userInfo.followCount}</strong>
                                        <div>关注</div>
                                    </a>
                                </li>
                                <li className="last">
                                    <a href="/user/fans">
                                        <strong>{userInfo.fansCount}</strong>
                                        <div>粉丝</div>
                                    </a>
                                </li>
                            </ul>              
                        </div>

                        <div className="txt-l home-desc">
                            <div>个人介绍：</div>
                            <div>所在地区：江苏 南京</div>
                            <div>社交网络：</div>
                        </div>
                    </div>
                </div>

                <SongRank />

                <SongSheet  sheetName="我创建的歌单" sheetCardData={cardList} />
              
                <SongSheet sheetName="我收藏的歌单" sheetCardData={cardList}/>
               
            </div>
        )
    }
}