import React from 'react';
import {Card,Avatar} from 'antd';
const { Meta } = Card;

import 'Style/pc/singerItem.scss';

class PCItem extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <a className="singerItem a-style" href="/user/home">
                <div className="head">
                    <img  src={this.props.headSrc} className="headImage" />
                </div>
                <div className="info">
                    <p className="text-ellipsis"><strong>{this.props.name}</strong></p>
                    <p className="text-ellipsis">{this.props.description}</p>
                </div>
            </a> 
        )
    }
}

export default PCItem;