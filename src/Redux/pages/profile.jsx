import React, { PureComponent } from "react";
import store from '../store';

export default class profile extends PureComponent {
  constructor()
  {
    super()
    this.state={
       counter:store.getState().counter
    }
  }
  componentDidMount()
  {
    store.subscribe(()=>
    {
      const state=store.getState()
      this.setState({
        counter:state.counter
      })
    })
  }
  render() {
    const {counter} = this.state;
    return (
      <div>
        profile conuter:{counter}
        <div>
          <button>+1</button>
          <button>+2</button>
          <button>+5</button>
        </div>
      </div>
    );
  }
}
