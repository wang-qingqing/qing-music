import React from 'react';
import { Layout,Icon,Slider  } from 'antd';
import PCHeader from 'Components/pc/pc_header';
import PCContent from 'Components/pc/pc_content';
const {Footer} = Layout;

import "Style/pc/level.scss";

const level = 8;
  

export default class PCUserHome extends React.Component{
    //获取等级特权信息
    get levelSpecialInfo(){
        let data = [];

        switch(level?Number(level):0){
            case 1:
                data = ['5G音乐云盘免费容量','黑名单上限20'];
                break;

            case 2:
                data = ['20G音乐云盘免费容量','黑名单上限20'];
                break;

            case 3:
                data = ['40G音乐云盘免费容量','黑名单上限20','随机获得价值100~400积分的积分券'];
                break;

            case 4:
                data = ['40G音乐云盘免费容量','黑名单上限20'];
                break;

            case 5:
                data = ['40G音乐云盘免费容量','黑名单上限20','随机获得价值200~600积分的积分券'];
                break;

            case 6:
                data = ['60G音乐云盘免费容量','黑名单上限40'];
                break;

            case 7:
                data = ['60G音乐云盘免费容量','黑名单上限80','随机获得价值300~800积分的积分券'];
                break;

            case 8:
                data = ['60G音乐云盘免费容量','黑名单上线100'];
                break;

            case 9:
                data = ['60G音乐云盘免费容量','黑名单上限120','随机获得价值400~1000积分的积分券'];
                break;

            case 10:
                data = ['100G音乐云盘免费容量','黑名单上限140'];
                break;

            default:           
                break;
        }
      
        return data;
    }

    //获取
    get marks(){
        let data = {};
        for(let i = 0; i< 11;i++){
            data = Object.assign(data,{
                [i*10]: i
            })
        }

        return data;
    }

    render(){
        return(
            <Layout>
                <PCHeader />
                
                <div className="user-level-content">
                    <div>
                        <h2 className="text-margin">
                            当前等级
                            <span className="text-seperator">:</span>
                            <span className="text-strong">Lv.{level}</span>
                        </h2>

                        <div className="text-margin">
                            <Slider marks={this.marks} step={null} tipFormatter={null} defaultValue={level*10} />
                            <div>等级数据每天早上6点更新</div>
                        </div>

                        <div className="text-margin">
                            <h2>当前等级特权：</h2>
                            {
                                this.levelSpecialInfo && this.levelSpecialInfo.length ?
                                    <ul>
                                        {
                                            this.levelSpecialInfo.map((info,index) => {
                                                return <li key={index}>{info}</li>
                                            })
                                        }                                
                                    </ul>
                                :''
                            } 
                        </div>

                        <a href="./#/level/details" className="text-margin">了解等级特权></a>

                    </div>

                    {
                        level < 10 ?
                            <div>
                                <div className="level-seperator"></div>

                                <h3 className="text-margin">
                                    距离下一个等级
                                    <span className="text-seperator">:</span>
                                    <span className="text-strong">Lv.{level+1}</span>
                                    <Icon type="info-circle-o" className="text-pl-5px" />
                                </h3>

                                <div>
                                    听歌：
                                    <div className="bar">
                                        <div className="barbox">
                                            {/* <span style="width:38.02%;"></span> */}
                                        </div>
                                    </div>
                                    还需听歌666首 
                                </div>

                                <div>
                                    登录：
                                    <div className="bar">
                                        <div className="barbox">
                                            {/* <span style="width:100%;"></span> */}
                                        </div>
                                    </div>
                                    还需登录0天
                                </div>
                            </div>
                        :''
                    }        
                </div>
                
                <Footer style={{textAlign:'center'}}>
                    Qing Music&copy;2018
                </Footer>
        </Layout>         
        )
    }
}