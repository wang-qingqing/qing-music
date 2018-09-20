import React from 'react';
import {Button,Icon} from 'antd';
import 'Style/pc/userFollowCard.scss';

export default class PCUserFollowCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(                   
            this.props.followsList && this.props.followsList.length?
                <div className="user-follow-card-content">
                    <ul>
                        {
                            this.props.followsList.map((info,key) => {
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
                        }
                    </ul>
                </div>
            :''                           
        )
    }
}