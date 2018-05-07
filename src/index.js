import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    hashHistory
} from 'react-router-dom';

import 'antd/dist/antd.css';

import PCRoute from './routes/pc_route';
import MediaQuery from 'react-responsive';
import MobileRoute from './routes/mobile_route';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
           <PCRoute />
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
            <MobileRoute />
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("main"));