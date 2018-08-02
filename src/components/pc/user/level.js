import React from 'react';
import {Layout} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
const {Footer} = Layout;

import "Style/pc/level.scss";

export default class PCUserHome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <PCHeader />
                
                <div className="user-level-content">
                    <div>
                        当前等级
                    </div>

                    <div className="level-seperator"></div>

                    <div>
                        距离下一个等级
                    </div>
                </div>
                
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
        </Layout>         
        )
    }
}