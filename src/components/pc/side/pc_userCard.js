import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Tag} from 'antd';
import { Link } from 'react-router-dom';
import {observer} from 'mobx-react';
import Store from 'Store/store';
import "Style/pc/userCard.scss";
const userCardStore = Store.userCardStore;

@observer
class PCUserCard extends React.Component{
    constructor(props){
        super(props);
    };

    //签到
    signIn(){
        userCardStore.updateSignIn(); 
    }

    render(){
        let userInfo = userCardStore.userInfo;
        return (
            <div className="userCard_area">
                <div className="userCard_top">
                    <a href="./#/user/home"> 
                        <img className="head" src={userInfo.headSrc}/>
                    </a>
                    <div className="info">
                        <div>
                            <strong>
                                <a className="a-style name" href={`./#/user/home?id=${userInfo.userId}`}>{userInfo.name}</a>               
                            </strong>
                        </div>
                        <Tag style={{margin: '10px auto'}}>
                            <a href="./#/user/level">Lv.{userInfo.level}</a>
                        </Tag>
                        <div id="signInBtn">
                            {
                                !userCardStore.signIn?
                                <Button type="primary" style={{width: '80px'}} onClick={this.signIn}>签到</Button>
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