import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
const {Footer} = Layout;
const {Panel} = Collapse;
import 'Style/common.scss';
import 'Style/pc/userEvent.scss';

export default class PCUserEvent extends React.Component{
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
                            <Panel header="我的动态（1）" key="1">                                       
                                <div className="event-content">
                                    1
                                </div>

                                <div className="fans-content">
                                    <h4 className="v-hd4">我的粉丝</h4>
                                    <ul className="m-gz f-cb">
                                        <li>
                                            <a href="/user/home?id=111" title="name">
                                                <img src="" />
                                            </a>
                                            <p>
                                                <a href="/user/home?id=111" className="nm nm-icn f-thide s-fc1" title="name">name</a> 
                                            </p>
                                        </li>
                                    </ul>                                                  
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