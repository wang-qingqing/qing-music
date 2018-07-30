import React from 'react';
import {
    Collapse,
    message
  } from 'antd';
const {Panel} = Collapse;
import PCCard from 'Components/pc/pc_card';
import 'Style/common.scss';

export default class SongSheet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {sheetName,sheetCardData} = this.props;
        let sheetNumber = sheetCardData && sheetCardData.length;

        return(
            <div style={{margin: '30px 40px 10px 40px'}}>
                <Collapse defaultActiveKey={['1']}>          
                    <Panel key="1" 
                        header={                            
                            <span className="rank-title txt-l">{sheetName}{sheetNumber? "（"+sheetNumber+"）" : ""}</span>                         
                        }
                    >
                        <div style={{textAlign: 'center'}}>
                            {
                                sheetCardData && sheetCardData.length?
                                sheetCardData.map((card,index) => {
                                    return (                             
                                        <PCCard key={index} cardTitle={card.title} cardSrc={card.src} cardListen={card.listen} />
                                    )
                                }) 
                            : '' 
                            }  
                        </div>                                     
                    </Panel>  
                </Collapse>  
            </div>
        )
    }
}