import React from 'react';
import PCUserCard from './pc_userCard';
import PCPersonList from './pc_personList';

class PCSide extends React.Component{
    render(){
        return (
            <div className="side-content">
                <PCUserCard />
                <PCPersonList />
            </div>
        )
    }
}

export default PCSide = PCSide;