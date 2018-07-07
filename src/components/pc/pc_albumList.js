import React from 'react';
import {Icon,message} from 'antd';

import 'Style/pc/album.scss';

const albumList = [
    {
        id: 1,
        name: 'What is Love?',
        singers: [
            {
                id: 61,
                name:'TWICE'
            }
        ],
        coverSrc: './src/images/album/album1.png'
    },
    {
        id: 2,
        name: '飞云之下',
        singers: [
            {
                id: 62,
                name:'韩红'
            },
            {
                id: 63,
                name:'林俊杰'
            }
        ],
        coverSrc: './src/images/album/album2.png'
    },
    {
        id: 3,
        name: 'Dawn of us',
        singers: [
            {
                id: 64,
                name:'王嘉尔'
            }
        ],
        coverSrc: './src/images/album/album3.png'
    },
    {
        id: 4,
        name: 'Rose',
        singers: [
            {
                id: 65,
                name:'J.Fla'
            }
        ],
        coverSrc: './src/images/album/album4.png'
    },
    {
        id: 5,
        name: '爵士乐与不插电新编12首',
        singers: [
            {
                id: 66,
                name:'李志'
            }
        ],
        coverSrc: './src/images/album/album5.png'
    }
]

class PCAlbumList extends React.Component{
    play(){
        message.info('play music');
    }

    //也可以通过绑定事件来处理，方法如下：
    // componentDidMount() {
    //     document.querySelector('.play').addEventListener('click', e => {
    //         e.stopPropagation();
    //         alert("play music");
    //     })
    // }
      
    // componentWillUnmount() {
    //     document.querySelector('.play').removeEventListener('click');
    // }

    pre(){
        message.info('往前点击');
    }

    next(){
        message.info('往后点击');
    }

    render(){
        return (
            <div className="albumContainer">
                <a className="pre a-style"><Icon type="double-left" onClick={this.pre} /></a>
                <div className="roll">
                    <ul>

                        {
                            albumList.length?
                                albumList.map((album,index)=>{
                                    let albumUrl = "/album?id=" + album.id;
                                    return (
                                        <li key={index}>
                                            <div className="cover">                                                           
                                                <a title={album.name} href={albumUrl} className="msk a-style">
                                                    <img className="cover-img" src={album.coverSrc}/>  
                                                </a>
                                                <a title="播放" className="play a-style" onClick={this.play}>
                                                    <Icon type="play-circle" className="playIcon"/>
                                                </a>
                                            </div>
                                            <p className="albumName text-ellipsis">
                                                <a className="a-style" href={albumUrl} title={album.name}>{album.name}</a>
                                            </p>
                                            <p className="singer text-ellipsis">
                                                {
                                                album.singers.length ?
                                                        album.singers.map((singer,k) => {
                                                            return (
                                                                <span key={k}>
                                                                    <a className="a-style" href={"/artist?id="+singer.id}>{singer.name}</a>
                                                                    {
                                                                        k == album.singers.length-1
                                                                        ?''
                                                                        :<span className="space">/</span>
                                                                    }
                                                                </span>
                                                            )
                                                        })
                                                    :''                                      
                                                }                                    
                                            </p>
                                        </li>
                                    )
                                }) 
                            : ''
                        }
                        
                    </ul>
                </div>
                <a className="next a-style"><Icon type="double-right" onClick={this.next} /></a>
            </div>
        )
    }
}   

export default PCAlbumList;
