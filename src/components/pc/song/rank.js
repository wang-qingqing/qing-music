import React from 'react';
import {
    List,
    Icon,
    message
  } from 'antd';
  
import 'Style/pc/rank.scss';
import 'Style/common.scss';

const currentSearchTime = 'lastWeek';
const listenCount = 5000;
const rankList = [
    {
        id: 1,
        name: '宁夏',
        singer: '梁静茹',
        singerId: 2,
        time: 10
    },
    {
        id: 2,
        name: '你曾是少年',
        singer: 'S.H.E',
        singerId: 1,
        time: 9
    },
    {
        id: 3,
        name: '恋人未满',
        singer: 'S.H.E',
        singerId: 1,
        time: 9
    },
    {
        id: 4,
        name: '天使在唱歌',
        singer: 'S.H.E',
        singerId: 1,
        time: 8
    },
    {
        id: 5,
        name: '你曾是少年',
        singer: 'S.H.E',
        singerId: 1,
        time: 8
    },
    {
        id: 6,
        name: '半糖主义',
        singer: 'S.H.E',
        singerId: 1,
        time: 7
    },
    {
        id: 7,
        name: '两个人的荒岛',
        singer: 'S.H.E',
        singerId: 1,
        time: 6
    },
    {
        id: 8,
        name: '紫藤花',
        singer: 'S.H.E',
        singerId: 1,
        time: 5
    },
    {
        id: 9,
        name: '伦敦大桥下来',
        singer: 'S.H.E',
        singerId: 1,
        time: 3
    },
    {
        id: 10,
        name: '中国话',
        singer: 'S.H.E',
        singerId: 1,
        time: 2
    },
]

const itemBackgroundColor = "#f7f7f7";

export default class SongRank extends React.Component{
   
    play(){
        message.info("paly music")
    }

    addToPlayList(){
        message.info("添加到播放列表")
    }
    
    collect(){
        message.info("收藏")
    }

    share(){
        message.info("分享")
    }

    download(){
        message.info("下载")
    }

    //展示或隐藏操作按钮
    controlOperateShowOrHide(type,index){
        let currentDiv = document.querySelector("#rankOperate-" + index);
        if(type == "show"){
            currentDiv.style.display = "block"
        }else{
            currentDiv.style.display = "none"
        }
    }

    //根据播放次数计算百分比
    transferNumberToPercent(maxTime,number){
        let data = 0;
        if(maxTime && number){
            data = number/maxTime * 100;
        }
        return data;
    }

    render(){
        let maxTime = 0;
        rankList.forEach((rank) => {
            maxTime = Math.max(maxTime,rank.time)
        })

        return (
            <div className="rank-content">
                <List 
                    size="small"
                    bordered
                    header={
                        <span>      
                            <span className="rank-title">听歌排行</span>
                            <span className="rank-listenCount">
                                累积听歌{listenCount?listenCount:0}首
                                <span className="item-iconpoint">
                                    <Icon type="info-circle-o" />
                                    <div className="tip">
                                        实际播放时间过短的歌曲将不纳入计算
                                    </div>
                                </span>
                            </span>
                            <span className="fr">
                                <a className="a-style" style={currentSearchTime == "lastWeek"?{fontWeight:'bold'}:{}}>最近一周</a>
                                <span className="item-separator">|</span>
                                <a className="a-style" style={currentSearchTime == "allTime"?{fontWeight:'bold'}:{}}>所有时间</a>
                            </span>
                        </span>                   
                    }
                    footer={
                        <a className="a-style show-all" href="./user/songs/rank?id=1">
                            查看更多
                            <Icon type="right" />
                        </a>
                    }           
                    dataSource={rankList}
                    renderItem={(item,index) => 
                        (                
                            <List.Item 
                                className="item-area" 
                                style={index%2==1?{background: itemBackgroundColor}:{}} 
                                onMouseOver={() => this.controlOperateShowOrHide('show',index)} 
                                onMouseOut={() => this.controlOperateShowOrHide('hide',index)}
                             >
                                <div className="item-content">
                                    <div className="item-index inline-block">
                                        {index+1}.
                                    </div>

                                    <div className="inline-block"> 
                                        <Icon type="play-circle-o color-gray" 
                                            title="播放" 
                                            className="play-icon"
                                            onClick={this.play}
                                        />
                                        <strong>
                                            <a className="a-style item-name text-ellipsis" href={"/song?id=" + item.id} title={item.name}>{item.name}</a>
                                        </strong>
                                        <span className="item-separator color-gray">-</span>
                                        <a className="a-style item-name text-ellipsis color-gray" href={"/artist?id=" + item.singerId} title={item.singer}>{item.singer}</a>
                                    </div> 

                                    <div className="item-operate inline-block" id={"rankOperate-"+ index}>
                                        <a className="a-style" onClick={this.addToPlayList}>
                                            <Icon type="plus" title="添加到播放列表" />
                                        </a>
                                        <a className="a-style" onClick={this.collect}>
                                            <Icon type="folder-add" title="收藏" />
                                        </a>
                                        <a className="a-style" onClick={this.share}>
                                            <Icon type="share-alt" title="分享" />
                                        </a>
                                        <a className="a-style" onClick={this.download}>
                                            <Icon type="download" title="下载" />
                                        </a>
                                    </div>
                                </div>

                                <div className="item-time">
                                    <span className="item-bg" style={{width: this.transferNumberToPercent(maxTime,item.time)+'%'}}></span>
                                    <span>{item.time?item.time:0}次</span>
                                </div>
                                                                        
                            </List.Item>
                        )
                    }
                />                                 
            </div>
        )
    }
}