import React from 'react';
import SongRank from 'Components/pc/song/rank';
import SongSheetCreate from 'Components/pc/song/sheetCreate';

import "Style/pc/home.scss";
import "Style/pc/userCard.scss";

const userInfo = { //用户的相关信息
    userId: 123,//用户id
    name:'Lucky',//用户名
    headSrc: '../src/images/user/user1.png',//头像
    level: 8, //等级
    eventCount: 10, //动态
    followCount: 100, //关注
    fansCount: 66 //粉丝
}

export default class PCUserHomeContent extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="userInfo">
                    <div style={{width: '260px',float:'left'}}>
                        <img className="head" src={userInfo.headSrc} />
                    </div>

                    <div className="userCard_area home-userInfo">
                        <div className="txt-l home-name">
                            <strong>{userInfo.name}</strong>
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

                <SongSheetCreate />
              
                {/* songSheetCollect */}
               
            </div>
        )
    }
}