import React from 'react';
import {} from 'antd';

const topList = [
    {
        name: '飙升榜',
        songList: [
             {
                 index: 1,
                 id: 11,
                 name: ''
             },
             {
                 index: 2,
                 id: 12,
                 name: ''
             },
             {
                 index: 3,
                 id: 13,
                 name: ''
             },
             {
                 index: 4,
                 id: 14,
                 name: ''
             },
             {
                 index: 5,
                 id: 15,
                 name: ''
             },
             {
                 index: 6,
                 id: 16,
                 name: ''
             },
             {
                 index: 7,
                 id: 17,
                 name: ''
             },
             {
                 index: 8,
                 id: 18,
                 name: ''
             },
             {
                 index: 9,
                 id: 19,
                 name: ''
             },
             {
                 index: 10,
                 id: 20,
                 name: ''
             }
        ]
     },
     {
        name: '新歌榜',
        songList: [
             {
                 index: 1,
                 id: 21,
                 name: ''
             },
             {
                 index: 2,
                 id: 22,
                 name: ''
             },
             {
                 index: 3,
                 id: 23,
                 name: ''
             },
             {
                 index: 4,
                 id: 24,
                 name: ''
             },
             {
                 index: 5,
                 id: 25,
                 name: ''
             },
             {
                 index: 6,
                 id: 26,
                 name: ''
             },
             {
                 index: 7,
                 id: 27,
                 name: ''
             },
             {
                 index: 8,
                 id: 28,
                 name: ''
             },
             {
                 index: 9,
                 id: 29,
                 name: ''
             },
             {
                 index: 10,
                 id: 30,
                 name: ''
             }
        ]
     },
     {
        name: '原创歌曲榜',
        songList: [
             {
                 index: 1,
                 id: 31,
                 name: ''
             },
             {
                 index: 2,
                 id: 32,
                 name: ''
             },
             {
                 index: 3,
                 id: 33,
                 name: ''
             },
             {
                 index: 4,
                 id: 34,
                 name: ''
             },
             {
                 index: 5,
                 id: 35,
                 name: ''
             },
             {
                 index: 6,
                 id: 36,
                 name: ''
             },
             {
                 index: 7,
                 id: 37,
                 name: ''
             },
             {
                 index: 8,
                 id: 38,
                 name: ''
             },
             {
                 index: 9,
                 id: 39,
                 name: ''
             },
             {
                 index: 10,
                 id: 40,
                 name: ''
             }
        ]
     }
]

class PCTopList extends React.Component{
    render(){
        return (
            <div className="top_container">
               {
                    topList.length?
                        topList.map((top,index) => {
                                return (
                                    <div key={index}>
                                        111
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
