import React from 'react';
import {Layout} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHomeContent from 'Components/pc/user/content';

const {Footer} = Layout;

export default class PCUserHome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <PCHeader />
                
                <PCUserHomeContent />
                
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
            </Layout>         
        )
    }
}