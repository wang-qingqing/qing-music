import React from 'react';
import {Tag,Icon,Button} from 'antd';
import PCUserHead from 'Components/pc/user/head';
import SongRank from 'Components/pc/song/rank';
import SongSheet from 'Components/pc/song/sheet';

const cardList = [
    {
        title: '本宝宝终于找到了适合自己的BGM',
        src: './src/images/list/list1.png',
        listen: '1234'         
    },
    {
        title: '比起说我爱你 我更希望有机会说我也爱你',
        src: './src/images/list/list2.png',
        listen: '666'         
    },
    {
        title: '『古风·遇梦』听梦不愿醒 便随你风月无际',
        src: './src/images/list/list3.png',
        listen: '1234'         
    },
    {
        title: '你是一首旋律，被写在春天的风里',
        src: './src/images/list/list4.png',
        listen: '1'         
    },
    {
        title: '你是我不想醒过来的白日梦',
        src: './src/images/list/list5.png',
        listen: '35'         
    }
]

export default class PCUserHomeContent extends React.Component{
    render(){
        return (
            <div className="user-content">
                <PCUserHead />

                <SongRank />

                <SongSheet  sheetName="我创建的歌单" sheetCardData={cardList} />
              
                <SongSheet sheetName="我收藏的歌单" sheetCardData={cardList}/>
               
            </div>
        )
    }
}