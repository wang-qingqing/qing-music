import React from 'react';
import {Card,Avatar,Icon,message} from 'antd';

const cardStyle = {
    width: 160,
    display: 'inline-block',
    margin: '10px 16px',
}

const cardBodyStyle = {
    padding: '5px 0px',
    height: '35px'
}

export default class PCArtistCard extends React.Component{
    render(){
        return (
            <Card style={cardStyle}
                bodyStyle={cardBodyStyle}
                cover={<img title={this.props.cardTitle} src={this.props.cardSrc} />}
            >

                <a title={this.props.cardTitle} className="a-style">
                    <div className="card-name-text">{this.props.cardTitle}</div>
                </a>
            </Card>
        )
    }
}

