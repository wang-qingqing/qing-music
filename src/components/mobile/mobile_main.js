import React from 'react';
import { Flex, WhiteSpace,PullToRefresh } from 'antd-mobile';

import "Style/mobile/index.scss";

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class MobileMain extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };
    }

    componentDidMount(){

    }

    render(){
        return (
            <PullToRefresh
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                indicator={this.state.down ? 
                        {
                            activate: '松手推荐',
                            deactivate: '下拉推荐',
                            release: '推荐中...',
                            finish: ' '
                        } 
                    : { deactivate: '上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => {
                    this.setState({ refreshing: false });
                }, 1000);
                }}
            >
                <div>
                    <Flex>
                        <Flex.Item>个性推荐</Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>推荐的内容</Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>推荐的内容</Flex.Item>
                    </Flex>
                </div>
            </PullToRefresh>   
        )
       
    }
}