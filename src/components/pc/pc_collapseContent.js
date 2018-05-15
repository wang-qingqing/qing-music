import React from 'react';
import PCCard from './pc_card';
import PCAlbumList from './pc_albumList';
import PCTopList from './pc_topList';

class PCCollapseContent extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        let item = this.props.item;
               
        if(item.type == 1){
                return (
                    item.cardList.length?
                        item.cardList.map((card,index) => {
                            return (
                                <PCCard key={index} cardTitle={card.title} cardSrc={card.src} cardListen={card.listen} />
                            )
                        }) 
                    : ''            
                )                                  
        }else if(item.type == 2){
            return(
                <PCAlbumList />
            ) 
        }else if(item.type == 3){
            return (
                <PCTopList />
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}   

export default PCCollapseContent;