import React from 'react';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import {Layout} from 'antd';

import "Style/pc/index.scss";

const {Footer} = Layout;

export default class PCIndex extends  React.Component{
    render(){
        return (          
            <Layout>
                <PCHeader  activeKey='1' />
                <PCContent />
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
            </Layout>         
        ) 
    }
}
