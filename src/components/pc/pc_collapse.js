import React from 'react';
import ReactDOM from 'react-dom'; 
import {
  Collapse,
  Icon
} from 'antd';
const {Panel} = Collapse;
import PCCollapseContent from './pc_collapseContent';


//自定义模块内容
const panelModules = [
    {
        key: 1,
        type: 1,//1:推荐 2：新碟 3：榜单
        name: '热门推荐',
        showMore: true,
        showMoreUrl: '/discover/playlist/',
        cardList: [
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
    },
    {
        key: 2,
        type: 1,
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
        type: 2,
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
        type: 3,
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
                        panelModules.length?
                            panelModules.map((item) => {
                                return (
                                    <Panel header={item.name} key={item.key} >
                                        {
                                            item.showMore?
                                                <a className="showMoreList card-name" href={item.showMoreUrl}>
                                                    查看更多<Icon type="arrow-right"/>
                                                </a>
                                            :''
                                        }                                       
                                        <PCCollapseContent item={item} />
                                    </Panel>  
                                )      
                            })
                        : ''                                    
                    }       
                </Collapse> 
            </div>
        )
    }
}


export default PCCollapse;