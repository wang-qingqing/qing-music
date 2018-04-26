import React from 'react';
import PCUserCard from './pc_userCard';
import PCPersonList from './pc_personList';

//定义入驻歌手
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
    {
        userId: 3,
        name: 'Fine乐团',
        description: '独立音乐人',
        headSrc: './src/images/singer/singer2.png' //头像
    },
    {
        userId: 4,
        name: 'Fine乐团',
        description: '独立音乐人',
        headSrc: './src/images/singer/singer2.png' //头像
    },
    {
        userId: 5,
        name: 'Fine乐团',
        description: '独立音乐人',
        headSrc: './src/images/singer/singer2.png' //头像
    }
]

//定义热门主播
const djItem = [
    {
        userId: 6,
        name: 'DJ晓芳',
        description: '独立DJ，CRI环球旅游广播特邀DJ',
        headSrc: './src/images/singer/dj1.png' //头像 
    },
    {
        userId: 7,
        name: '谢谢收听',
        description: '南京电台主持人王馨',
        headSrc: './src/images/singer/dj2.png' //头像 
    },
    {
        userId: 8,
        name: '谢谢收听',
        description: '南京电台主持人王馨',
        headSrc: './src/images/singer/dj2.png' //头像 
    },
    {
        userId: 9,
        name: '谢谢收听',
        description: '南京电台主持人王馨',
        headSrc: './src/images/singer/dj2.png' //头像 
    },
    {
        userId: 10,
        name: '谢谢收听',
        description: '南京电台主持人王馨',
        headSrc: './src/images/singer/dj2.png' //头像 
    }
]

class PCSide extends React.Component{
    render(){
        return (
            <div className="side-content">
                <PCUserCard />
                <PCPersonList title="入驻歌手" showMoreUrl="/discover/artist/signed" itemList={singerItem} />
                <PCPersonList title="热门主播" itemList={djItem} />
            </div>
        )
    }
}

export default PCSide = PCSide;