import React from 'react';
import {Card,Avatar,Icon,message} from 'antd';

const cardStyle = {
    width: 160,
    display: 'inline-block',
    margin: '0 3px',
    marginBottom: '15px'
}

const cardBodyStyle = {
    padding: '5px 0px',
    height: '50px'
}
class PCCard extends React.Component{
    //播放音乐
    play(){
        message.info("paly music")
    }


    render(){
        return (
            <Card style={cardStyle}  
                bodyStyle={cardBodyStyle} 
                cover={<img title={this.props.cardTitle} src={this.props.cardSrc} />} 
                actions={[
                    <div style={{textAlign: 'left'}}>
                        <Icon type="sound" />
                        <span style={{paddingLeft: '5px'}}>{this.props.cardListen}</span>
                    </div>,
                    <Icon type="play-circle-o" onClick={this.play} />
                ]} >

                <a title={this.props.cardTitle} className="a-style">
                    <div className="card-name-text">{this.props.cardTitle}</div>
                </a>
            </Card>
        )
    }
}

export default PCCard;