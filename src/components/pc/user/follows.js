import React from 'react';
import {Layout,Collapse} from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
import PCUserHead from 'Components/pc/user/head';
const {Footer} = Layout;
const {Panel} = Collapse;
// import 'Style/common.scss';
// import 'Style/pc/userEvent.scss';

export default class PCUserFollows extends React.Component{
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
                            <Panel header="关注（1）" key="1">                                       
                                <div>
                                    {/* <ul>
                                        <li className="last ">
                                            <a href="/user/home?id=504044769" className="ava f-pr" title="怕不是Tokyo">
                                                <img src="http://p1.music.126.net/rRgvyp9Q81KEn39VJKFQAw==/109951163528505677.jpg?param=60y60" />
                                            </a>
                                            <div className="info">
                                                <p>
                                                    <a href="/user/home?id=504044769" className="s-fc7 f-fs1 nm f-thide" title="怕不是Tokyo">
                                                        怕不是Tokyo
                                                    </a>
                                                    <sup className="u-icn u-icn-84 "></sup>
                                                    <i className="icn u-icn u-icn-s-00"></i>
                                                </p>
                                                <p>
                                                    <a href="/user/event?id=504044769">
                                                        动态<em className="s-fc7">5</em>
                                                    </a>
                                                    <span className="line">|</span>
                                                    <a href="/user/follows?id=504044769">
                                                        关注<em className="s-fc7">14</em>
                                                    </a>
                                                    <span className="line">|</span>
                                                    <a href="/user/fans?id=504044769">
                                                        粉丝<em className="s-fc7">14799</em>
                                                    </a>
                                                </p>
                                                <p className="s-fc3 f-thide">
                                                    我就是这么一个人，讲起来挺没劲的。
                                                </p>
                                            </div>
                                            <div className="oper" id="oper_504044769">
                                                <a className="u-btn u-btn-7 f-tdn" href="#" data-action="send" data-userid="504044769" data-nickname="怕不是Tokyo">
                                                    <i>发私信</i>
                                                </a>
                                                <p className="s-fc4">
                                                    <i className="u-icn u-icn-67"></i>
                                                    已关注
                                                </p>
                                                <p className="s-fc4" style={{display:'none'}}>
                                                    <i className="u-icn u-icn-66"></i> 
                                                    相互关注
                                                </p>
                                                <a className="u-btn u-btn-8 f-tdn" href="#" data-action="follow" data-userid="504044769" style={{display:'none'}}>
                                                    关 注
                                                </a>
                                            </div>
                                        </li>
                                    </ul> */}
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