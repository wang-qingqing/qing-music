import React from "react";
import ReactDOM from "react-dom";
import style from "./css/main.css";

export default class App extends React.Component{
  render(){
    return (
      <div>
        this is a main container
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("main"));