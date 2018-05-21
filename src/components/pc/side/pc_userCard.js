import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Tag} from 'antd';
import { Link } from 'react-router-dom';

import "Style/pc/userCard.scss";

class PCUserCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: { //用户的相关信息
                userId: 123,//用户id
                name:'小猫咪喵喵喵',//用户名
                headSrc: './src/images/user/user1.png',//头像
                level: 8, //等级
                eventCount: 10, //动态
                followCount: 100, //关注
                fansCount: 66 //粉丝
            },
            signIn: false //是否签到
        }
    };

    //签到
    signIn(){
        this.setState({
            signIn: !this.state.signIn
        })  
    }

    render(){
        let userInfo = this.state.userInfo;
        return (
            <div className="userCard_area">
                <div className="userCard_top">
                    <a href="/user/home"> 
                        <img className="head" src={userInfo.headSrc}/>
                    </a>
                    <div className="info">
                        <strong>
                            <a className="a-style name" href={`/user/home?id=${userInfo.userId}`}>{userInfo.name}</a>               
                        </strong>
                        <Tag style={{margin: '10px auto'}}>
                            <a href="/user/level">Lv.{userInfo.level}</a>
                        </Tag>
                        <div id="signInBtn">
                            {
                                !this.state.signIn?
                                <Button type="primary" style={{width: '80px'}} onClick={this.signIn.bind(this)}>签到</Button>
                                :<Button disabled="disabled" style={{width: '80px'}}>已签到</Button>
                            }             
                        </div>
                    </div>
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
            </div>
        )
    }
}

export default PCUserCard;