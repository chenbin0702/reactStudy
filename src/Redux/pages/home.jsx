import React, { PureComponent } from 'react'
import store from '../store';
import { addNumberAction } from '../store/actionCreators';
export default class home extends PureComponent {
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
  addNum(num)
  {
    store.dispatch(addNumberAction(num))
  }
  render() {
    const {counter} = this.state;
    return (
      <div>
        
        home conuter:{counter}
        <div>
          <button onClick={()=>this.addNum(1)}>+1</button>
          <button onClick={()=>this.addNum(2)}>+2</button>
          <button onClick={()=>this.addNum(5)}>+5</button>
        </div>
      </div>
    )
  }
}
