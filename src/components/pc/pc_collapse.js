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
        name: '热门推荐'
    },
    {
        key: 2,
        name: '个性化推荐'
    },
    {
        key: 3,
        name: '新碟上架'
    },
    {
        key: 4,
        name: '榜单'
    }
]
//自定义默认展开的模块
const  defaultActiveKey = ['1','2','3','4'];

class PCCollapse extends React.Component{
   
    render(){
        return(
            <Collapse defaultActiveKey={defaultActiveKey}>
                {
                    panelModules.map(function(item){
                        return (
                            <Panel header={item.name} key={item.key}>
                                <PCCard />
                            </Panel>
                        )                             
                    })
                }       
            </Collapse> 
        )
    }
}


export default PCCollapse = PCCollapse;