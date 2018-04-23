import React from 'react';
import PCHeader from './pc_header';
import PCContent from './pc_content';
import {Layout} from 'antd';
const {Footer} = Layout;

export default class PCIndex extends  React.Component{
    render(){
        return (          
            <Layout>
                <PCHeader />
                <PCContent />
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
            </Layout>         
        ) 
    }
}
