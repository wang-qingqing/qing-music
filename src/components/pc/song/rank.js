import React from 'react';
import {
    Collapse,
    List,
    Table,
    Icon
  } from 'antd';
const {Panel} = Collapse;

const rankList = [
    {
        index: 1,
        id: 1,
        name: '宁夏',
        singer: '梁静茹',
        time: 10
    },
    {
        index: 2,
        id: 2,
        name: '你曾是少年',
        singer: 'S.H.E',
        time: 9
    },
    {
        index: 3,
        id: 3,
        name: '恋人未满',
        singer: 'S.H.E',
        time: 9
    },
    {
        index: 4,
        id: 4,
        name: '天使在唱歌',
        singer: 'S.H.E',
        time: 8
    },
    {
        index: 5,
        id: 5,
        name: '天灰',
        singer: 'S.H.E',
        time: 8
    },
    {
        index: 6,
        id: 6,
        name: '天灰',
        singer: 'S.H.E',
        time: 7
    },
    {
        index: 7,
        id: 7,
        name: '天灰',
        singer: 'S.H.E',
        time: 6
    },
    {
        index: 8,
        id: 8,
        name: '天灰',
        singer: 'S.H.E',
        time: 5
    },
    {
        index: 9,
        id: 9,
        name: '天灰',
        singer: 'S.H.E',
        time: 3
    },
    {
        index: 10,
        id: 10,
        name: '天灰',
        singer: 'S.H.E',
        time: 2
    },
]

const itemBackgroundColor = "#e5e5e5";

export default class SongRank extends React.Component{
    rankColumns = [
        {
            title: '',
            dataIndex: 'index',
            key: 'index',
            render: (data) => {
                return data + '.'
            }
        },
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
            render: (data,record) => {
                return (
                    <span>
                        <span>

                        </span>
                        <span>
                            {record.name?record.name:''} - {record.singer?record.singer:''} 
                        </span>
                        <span>

                        </span>
                    </span>
                )
            }
        },
        {
            title: '',
            dataIndex: 'time',
            key: 'time',
            render: (data) => {
                return data?(data + '次'):''
            }
            
        }
    ]

    render(){
        return (
            <div className="rank-content">
                <List 
                    header="听歌排行"
                    size="small"
                    footer={<a className="a-style show-all" href="./user/songs/rank?id=1">查看更多<Icon type="right" /></a>}
                    bordered
                    dataSource={rankList}
                    renderItem={(item,index) => 
                        (                
                            <List.Item 
                                className="item-area" 
                                style={item.index%2==1?{background: itemBackgroundColor}:{}} 
                                // onMouseOver={() => this.controlOperateShowOrHide('show',index,item.index)} 
                                // onMouseOut={() => this.controlOperateShowOrHide('hide',index,item.index)}
                             >
                                
                                <div className="item-index">
                                    {item.index}.
                                </div>
                                <div className="item-name text-ellipsis"> 
                                    <a className="a-style" href={"/song?id=" + item.id} title={item.name}>{item.name}</a>
                                </div> 
                                <div className="item-operate" id={"topOperate"+ index +"-"+ item.index}>
                                    {/* <a className="a-style" onClick={this.play}>
                                        <Icon type="play-circle-o" title="播放" />
                                    </a>
                                    <a className="a-style" onClick={this.addToPlayList}>
                                        <Icon type="plus" title="添加到播放列表" />
                                    </a>
                                    <a className="a-style" onClick={this.collect}>
                                        <Icon type="folder-add" title="收藏" />
                                    </a> */}
                                </div>
                                <div style={{float: 'right'}}>
                                    {item.time?item.time:0}次
                                </div>
                                                                        
                            </List.Item>
                        )
                    }
                />                                 
            </div>
        )
    }
}