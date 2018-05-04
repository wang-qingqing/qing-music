import React from 'react';
import PCCard from './pc_card';
import PCAlbumList from './pc_albumList';
import PCTopList from './pc_topList';

class PCCollapseContent extends React.Component{

    render(){
        let item = this.props.item;
               
        if(item.type == 1){
                return (
                    item.cardList.map((card,index) => {
                        return (
                            <PCCard key={index} cardTitle={card.title} cardSrc={card.src} cardListen={card.listen} />
                        )
                    })              
                )                                  
        }else if(item.type == 2){
            return(
                <PCAlbumList item={item} />
            ) 
        }else if(item.type == 3){
            return (
                <PCTopList item={item} />
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}   

export default PCCollapseContent = PCCollapseContent;