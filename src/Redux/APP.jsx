import React, { PureComponent } from 'react'
import store from './store';
import Home from './pages/home';
import Profile from './pages/profile';
import  './style.css';
export default class 
c extends PureComponent {
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
        App counter: {counter}
        <div className="item">
        <Home/>
        <Profile/>
        </div>
       
      </div>
    )
  }
}
