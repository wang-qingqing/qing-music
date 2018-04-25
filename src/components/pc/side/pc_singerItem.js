import React from 'react';
import {Card,Avatar} from 'antd';
const { Meta } = Card;

class PCSingerItem extends React.Component{
    render(){
        return (
            <a className="singerItem">
                <div className="head">
                    <img  src={this.props.headSrc} className="headImage" />
                </div>
                <div className="info">
                    <strong>{this.props.name}</strong>
                    <p>{this.props.description}</p>
                </div>
            </a>





           
        )
    }
}

export default PCSingerItem = PCSingerItem;