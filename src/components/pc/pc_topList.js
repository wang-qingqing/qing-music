import React from 'react';
import {List,Icon,message} from 'antd';
import '../../style/pc/topList.scss';

const topList = [
    {
        id: 1,
        name: '飙升榜',
        imgSrc: '../../src/images/common/soar.png',
        songList: [
             {
                 index: 1,
                 id: 11,
                 name: '测试一下长度过长时能不能隐藏啊'
             },
             {
                 index: 2,
                 id: 12,
                 name: '因风守梦'
             },
             {
                 index: 3,
                 id: 13,
                 name: '庸人自扰'
             },
             {
                 index: 4,
                 id: 14,
                 name: '安娜的橱窗'
             },
             {
                 index: 5,
                 id: 15,
                 name: '超级喜欢你'
             },
             {
                 index: 6,
                 id: 16,
                 name: '不一样的滋味'
             },
             {
                 index: 7,
                 id: 17,
                 name: '识君前'
             },
             {
                 index: 8,
                 id: 18,
                 name: '慢慢喜欢你'
             },
             {
                 index: 9,
                 id: 19,
                 name: '我的名字'
             },
             {
                 index: 10,
                 id: 20,
                 name: 'Skin'
             }
        ]
     },
     {
        id: 2,
        name: '新歌榜',
        imgSrc: '../../src/images/common/new.png',
        songList: [
             {
                 index: 1,
                 id: 21,
                 name: '哑巴'
             },
             {
                 index: 2,
                 id: 22,
                 name: '纸短情长'
             },
             {
                 index: 3,
                 id: 23,
                 name: '后来的我们'
             },
             {
                 index: 4,
                 id: 24,
                 name: '双子'
             },
             {
                 index: 5,
                 id: 25,
                 name: '因风守梦'
             },
             {
                 index: 6,
                 id: 26,
                 name: '往后余生原创(demo)'
             },
             {
                 index: 7,
                 id: 27,
                 name: 'The Way I Am'
             },
             {
                 index: 8,
                 id: 28,
                 name: '学猫叫'
             },
             {
                 index: 9,
                 id: 29,
                 name: '我的名字'
             },
             {
                 index: 10,
                 id: 30,
                 name: '你打不过我吧'
             }
        ]
     },
     {
        id: 3,
        name: '原创歌曲榜',
        imgSrc: '../../src/images/common/original.png',
        songList: [
             {
                 index: 1,
                 id: 31,
                 name: '双子'
             },
             {
                 index: 2,
                 id: 32,
                 name: '雨巷'
             },
             {
                 index: 3,
                 id: 33,
                 name: '光尘'
             },
             {
                 index: 4,
                 id: 34,
                 name: '听，我的噩梦'
             },
             {
                 index: 5,
                 id: 35,
                 name: 'Hello Hello'
             },
             {
                 index: 6,
                 id: 36,
                 name: 'heart'
             },
             {
                 index: 7,
                 id: 37,
                 name: '秒秒'
             },
             {
                 index: 8,
                 id: 38,
                 name: 'if'
             },
             {
                 index: 9,
                 id: 39,
                 name: '去问猫耳朵'
             },
             {
                 index: 10,
                 id: 40,
                 name: '摇晃'
             }
        ]
     }
]

class PCTopList extends React.Component{
    //播放
    play(){
        message.info('播放');
    }

    //收藏
    collect(){
        message.info('收藏');
    }

    //添加到播放列表
    addToPlayList(){
        message.info('添加到播放列表');
    }

    //展示或隐藏操作按钮
    controlOperateShowOrHide(type,index,itemIndex){
        const key = index + "-" + itemIndex;
        let currentDiv = document.querySelector("#topOperate"+key);
        if(type == "show"){
            currentDiv.style.display = "block"
        }else{
            currentDiv.style.display = "none"
        }
    }

    render(){
        return (
            <div className="top_container">
               {
                    topList.length?
                        topList.map((top,index) => {
                                let listUrl = "/discover/toplist?id=" + top.id;
                                const itemBackgroundColor = "#e5e5e5";
                                const indexColor = "#c10d0c";

                                return (
                                    <div key={index} className="block">
                                        <List 
                                            header={
                                                <div className="sort_type">
                                                    <img className="cover" src={top.imgSrc}/>
                                                    <div className="title">
                                                        <a className="a-style" href={listUrl}><strong>{top.name}</strong></a>
                                                        <div className="icon-area">
                                                            <a className="a-style" onClick={this.play.bind(this)}>
                                                                <Icon type="play-circle-o" title="播放" />
                                                            </a>
                                                            <a className="a-style" onClick={this.collect.bind(this)}>
                                                                <Icon type="folder-add" title="收藏" />
                                                            </a>                                                                                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            size="small"
                                            footer={<a className="a-style show-all" href={listUrl}>查看全部<Icon type="right" /></a>}
                                            bordered
                                            dataSource={top.songList}
                                            renderItem={item => 
                                                (
                                                    <List.Item 
                                                        className="item-area" 
                                                        style={item.index%2==1?{background: itemBackgroundColor}:{}} 
                                                        onMouseOver={this.controlOperateShowOrHide.bind(this,'show',index,item.index)} 
                                                        onMouseOut={this.controlOperateShowOrHide.bind(this,'hide',index,item.index)} >
                                                        
                                                        <div className="item-index" style={item.index<4?{color:indexColor}:{}}>
                                                            {item.index}
                                                        </div>
                                                        <div className="item-name text-ellipsis"> 
                                                            <a className="a-style" href={"/song?id=" + item.id} title={item.name}>{item.name}</a>
                                                        </div> 
                                                        <div className="item-operate" id={"topOperate"+ index +"-"+ item.index}>
                                                            <a className="a-style" onClick={this.play.bind(this)}>
                                                                <Icon type="play-circle-o" title="播放" />
                                                            </a>
                                                            <a className="a-style" onClick={this.addToPlayList.bind(this)}>
                                                                <Icon type="plus" title="添加到播放列表" />
                                                            </a>
                                                            <a className="a-style" onClick={this.collect.bind(this)}>
                                                                <Icon type="folder-add" title="收藏" />
                                                            </a>
                                                        </div>
                                                                                               
                                                    </List.Item>
                                                )
                                            }
                                        />                               
                                    </div>
                                )
                        })
                    : ''
               }
            </div>
        )
    }
}   

export default PCTopList;
