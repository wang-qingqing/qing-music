import React from 'react';
import {Icon} from 'antd';
import PCSingerItem from './pc_singerItem';

const singerItem = [
    {
        userId: 1,
        name: '音乐人赵雷',
        description: '民谣歌手',
        headSrc: './src/images/singer/singer1.png' //头像
    },
    {
        userId: 2,
        name: 'Fine乐团',
        description: '独立音乐人',
        headSrc: './src/images/singer/singer2.png' //头像
    },
]
class PCPersonList extends React.Component{
    render(){
        return (
            <div className="personList">
                <div>
                    <span><strong>入驻歌手</strong></span>
                    <span className="showMore">
                        <a className="card-name">查看更多<Icon type="right" /></a>
                    </span>
                </div>
                <div className="underline"></div>
                <div>
                    {
                        singerItem.map(function(singer,index){
                            return (
                                <PCSingerItem key={index} userId={singer.userId} name={singer.name} description={singer.description} headSrc={singer.headSrc} />
                            )
                        })
                    }                
                </div>
            </div>
        )
    }
}

export default PCPersonList = PCPersonList;