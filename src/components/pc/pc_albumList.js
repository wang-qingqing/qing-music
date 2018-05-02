import React from 'react';
import {Icon} from 'antd';

class PCAlbumList extends React.Component{
    render(){
        return (
            <div className="albumContainer">
                <a className="pre card-name"><Icon type="left" /></a>
                <div className="roll">
                    <ul>
                        <li>
                            <div className="cover">
                                <img className="cover-img" src="./src/images/album/album1.png"/>
                                <a title="" href="/album" className="msk card-name"></a>
                                <a title="播放" className="play card-name"><Icon type="play-circle"/></a>
                            </div>
                            <p className="albumName text-ellipsis">
                                <a className="card-name" href="/album">飞云之下</a>
                            </p>
                            <p className="singer text-ellipsis" title="11">
                                <a className="card-name" href="/artist">韩红</a>
                                <span className="space">/</span>
                                <a className="card-name">韩红</a>
                            </p>
                        </li>
                    </ul>
                </div>
                <a className="next card-name"><Icon type="right" /></a>
            </div>
        )
    }
}   

export default PCAlbumList = PCAlbumList;
