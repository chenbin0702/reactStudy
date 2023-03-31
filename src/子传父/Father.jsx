import React, { Component } from 'react'
import Son from './Son';

export default class Father extends Component {
  constructor()
  {
    super()
    this.state={
      count:100
    }
  }
  changeNum(countnum)
  {
    const {count} = this.state;
    let newCount=countnum+count
    this.setState({
      count:newCount
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div>计数值为:{count}
       <Son addCount={(countnum)=>this.changeNum(countnum)}></Son>
      </div>
    )
  }
}
