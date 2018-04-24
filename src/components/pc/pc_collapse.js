import React from 'react';
import ReactDOM from 'react-dom'; 
import {
  Collapse
} from 'antd';
const {Panel} = Collapse;
import PCCard from './pc_card';

//自定义模块内容
const panelModules = [
    {
        key: 1,
        name: '热门推荐',
        cardList: [
            {
                title: '标题1',
                src: './src/images/list/list1.png',
                listen: '1234'         
            },
            {
                title: '标题2',
                src: './src/images/list/list2.png',
                listen: '666'         
            },
            {
                title: '标题3',
                src: './src/images/list/list3.png',
                listen: '1234'         
            },
            {
                title: '标题4',
                src: './src/images/list/list4.png',
                listen: '1'         
            },
            {
                title: '标题5',
                src: './src/images/list/list5.png',
                listen: '35'         
            }
        ]
    },
    {
        key: 2,
        name: '个性化推荐',
        cardList: [
            {
                title: '标题1',
                src: './src/images/list/list1.png',
                listen: '1234'         
            },
            {
                title: '标题2',
                src: './src/images/list/list2.png',
                listen: '666'         
            },
            {
                title: '标题3',
                src: './src/images/list/list3.png',
                listen: '1234'         
            },
            {
                title: '标题4',
                src: './src/images/list/list4.png',
                listen: '1'         
            },
            {
                title: '标题5',
                src: './src/images/list/list5.png',
                listen: '35'         
            }
        ]
    },
    {
        key: 3,
        name: '新碟上架',
        cardList: [
            {
                title: '标题1',
                src: './src/images/list/list1.png',
                listen: '1234'         
            },
            {
                title: '标题2',
                src: './src/images/list/list2.png',
                listen: '666'         
            },
            {
                title: '标题3',
                src: './src/images/list/list3.png',
                listen: '1234'         
            },
            {
                title: '标题4',
                src: './src/images/list/list4.png',
                listen: '1'         
            },
            {
                title: '标题5',
                src: './src/images/list/list5.png',
                listen: '35'         
            }
        ]
    },
    {
        key: 4,
        name: '榜单',
        cardList: [
            {
                title: '标题1',
                src: './src/images/list/list1.png',
                listen: '1234'         
            },
            {
                title: '标题2',
                src: './src/images/list/list2.png',
                listen: '666'         
            },
            {
                title: '标题3',
                src: './src/images/list/list3.png',
                listen: '1234'         
            },
            {
                title: '标题4',
                src: './src/images/list/list4.png',
                listen: '1'         
            },
            {
                title: '标题5',
                src: './src/images/list/list5.png',
                listen: '35'         
            }
        ]
    }
]
//自定义默认展开的模块
const  defaultActiveKey = ['1','2','3','4'];

class PCCollapse extends React.Component{
   
    render(){
        return(
            <div style={{width: '700px'}}>
                <Collapse defaultActiveKey={defaultActiveKey}>
                    {
                        panelModules.map(function(item){
                            return (
                                <Panel header={item.name} key={item.key} >
                                    {
                                        item.cardList.map(function(card,index){
                                            return (
                                                <PCCard key={index} cardTitle={card.title} cardSrc={card.src} cardListen={card.listen} />
                                            )
                                        })
                                    }
                                </Panel>
                            )                             
                        })
                    }       
                </Collapse> 
            </div>
        )
    }
}


export default PCCollapse = PCCollapse;