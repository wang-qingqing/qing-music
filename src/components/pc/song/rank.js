import React from 'react';
import {
    Collapse,
    Icon
  } from 'antd';
const {Panel} = Collapse;

export default class SongRank extends React.Component{
    render(){
        return (
            <Collapse>
                <Panel style={{position: 'relative'}} header="听歌排行">
                    <a className="showMoreList a-style">
                        最近一周
                    </a>
                                                    
                    
                </Panel>
            </Collapse>  
        )
    }
}