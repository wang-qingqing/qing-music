import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    hashHistory
} from 'react-router-dom';

import MediaQuery from 'react-responsive';
import PCMain from './components/pc/pc_main';
import MobileMain from './components/mobile/mobile_main';

import 'antd/dist/antd.css';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PCMain}></Route>
              </Switch>
            </BrowserRouter>
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MobileMain}></Route>
                </Switch>
            </BrowserRouter>
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("main"));