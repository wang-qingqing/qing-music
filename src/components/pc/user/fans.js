import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
const {Footer} = Layout;
const {Panel} = Collapse;
import 'Style/pc/userFans.scss';

export default class PCUserFans extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <PCHeader />
                
                <div className="user-content">
                    <PCUserHead />

                     <Collapse defaultActiveKey={["1"]}>   
                            <Panel header="粉丝（1）" key="1">                                       
                                <div>
                                    
                                </div>
                            </Panel>  
                        </Collapse>  
                </div>
                
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
            </Layout>         
        )
    }
}