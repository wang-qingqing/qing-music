import React from 'react';

class PCUserCard extends React.Component{
    render(){
        return (
            <div className="userCard_area">
                <div className="userCard_top">
                    <a className="imageLink">
                        <img src="./src/images/user/user1.png" className="head"/>
                    </a>
                    <div className="info">
                        <strong>
                            <a className="card-name name">用户名</a>               
                        </strong>
                        <p>
                            <a className="level">Lv.7</a>
                        </p>
                    </div>
                </div>
                <div className="userCard_bottom">
                    <ul>
                        <li className="first">
                            <a className="card-name">
                                <strong>6</strong>
                                <div>动态</div>
                            </a>
                        </li>
                        <li></li>
                        <li className="last"></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PCUserCard = PCUserCard;