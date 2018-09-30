import React from 'react';
import { PullToRefresh } from 'antd-mobile';
import MobileHeader from 'Components/mobile/mobile_header';
import MobileContent from 'Components/mobile/mobile_content';
import MobileFooter from 'Components/mobile/mobile_footer';
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
                    <MobileHeader />
                    <MobileContent />
                    <MobileFooter />
                </div>
            </PullToRefresh>   
        )
       
    }
}