import React, { Component } from 'react'
import Tabs from './Tabs'

export default class TabControl extends Component {
  constructor()
  {
    super()
    this.state={
      title:['首页','操作','个人'],
      curIndex:0
    }
  }
  thisText(index)
  {
    this.setState({
      curIndex:index
    })
  }
  render() {
    const {title,curIndex} = this.state;
    return (
      <div>
        <Tabs title={title} changeText={(index)=>this.thisText(index)} />
        <div>{title[curIndex]}</div>
      </div>
    )
  }
}
