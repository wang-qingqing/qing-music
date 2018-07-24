import React from 'react';
import {
    Collapse,
    List,
    Icon
  } from 'antd';
const {Panel} = Collapse;

export default class SongRank extends React.Component{
    render(){
        return (
            <div className="rank-content">
                <List 
                    header="听歌排行"
                    size="small"
                    footer={<a className="a-style show-all" href="./user/songs/rank?id=1">查看更多<Icon type="right" /></a>}
                    bordered
                    dataSource={top.songList}
                    renderItem={item => 
                        (
                            <List.Item 
                                className="item-area" 
                                style={item.index%2==1?{background: itemBackgroundColor}:{}} 
                                onMouseOver={() => this.controlOperateShowOrHide('show',index,item.index)} 
                                onMouseOut={() => this.controlOperateShowOrHide('hide',index,item.index)} >
                                
                                <div className="item-index" style={item.index<4?{color:indexColor}:{}}>
                                    {item.index}
                                </div>
                                <div className="item-name text-ellipsis"> 
                                    <a className="a-style" href={"/song?id=" + item.id} title={item.name}>{item.name}</a>
                                </div> 
                                <div className="item-operate" id={"topOperate"+ index +"-"+ item.index}>
                                    <a className="a-style" onClick={this.play}>
                                        <Icon type="play-circle-o" title="播放" />
                                    </a>
                                    <a className="a-style" onClick={this.addToPlayList}>
                                        <Icon type="plus" title="添加到播放列表" />
                                    </a>
                                    <a className="a-style" onClick={this.collect}>
                                        <Icon type="folder-add" title="收藏" />
                                    </a>
                                </div>
                                                                        
                            </List.Item>
                        )
                    }
                />                           
            </div>
        )
    }
}