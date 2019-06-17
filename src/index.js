import React, {Component,Fragment} from "react";
import ReactDOM from "react-dom";
import YRangeProvider from "./lib";

const data = [...new Array(10000).keys()]
                .map((i)=>([{x:i,y:i},{x:i,y:-i}]))
                .flat();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {minX: 0,
                  maxX: 10000
                  };
  }
  
  render(){
    let {minX,maxX} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            minX
            <input type="range" min={0} max={maxX} value={minX}
                   onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}/>
            {minX}
          </div>
          <div>
            maxX
            <input type="range" min={minX} max={10000} value={maxX}
                   onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}/>
            {maxX}
          </div>
            data: list of objects
          <div>
            x: string
          </div>
            y: string
          <div>
            render: {"callback({minY,maxY})"}
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <YRangeProvider data={data}
                          x="x"
                          y="y"
                          minX={minX}
                          maxX={maxX}
                          render={({minY,maxY})=>
            `${minY} to ${maxY}`
                          }/>
        </fieldset>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
