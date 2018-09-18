import React from 'react';
import 'Style/pc/userEvent.scss';

export default class PCUserBriefCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(                   
            this.props.briefList && this.props.briefList.length?
                <div className="brief-content">
                    <h4 className="v-hd4">{this.props.briefName||''}</h4>
                    <ul>
                        {
                            this.props.briefList.map((fan,key) => {
                                return (
                                    <li key={key}>
                                        <a href={`/user/home?id=${fan.id}`} title={fan.name}>
                                            <img src={fan.url} className="brief-image" />
                                        </a>
                                        <p>
                                            <a href={`/user/home?id=${fan.id}`} className="nm f-thide" title={fan.name}>
                                                {fan.name}
                                            </a> 
                                        </p>
                                    </li>
                                ) 
                            }) 
                        }                                
                    </ul> 
                </div>      
            :''                           
        )
    }
}