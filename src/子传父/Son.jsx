import React, { Component } from 'react'

export default class Son extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props)
  {
    super(props)
    
  }
  addNum(count)
  {
    this.props.addCount(count)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.addNum(1)}>+1</button>
        <button onClick={()=>this.addNum(5)}>+5</button>
        <button onClick={()=>this.addNum(10)}>+10</button>
      </div>
    )
  }
}
