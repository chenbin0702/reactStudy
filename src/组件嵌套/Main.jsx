import React, { Component } from 'react'
import MainBar from './MainBar'

import axios from 'axios'
export default class Main extends Component {
  constructor()
  {
    super()
    this.state={
      msg:'传递信息',
      list:[
        {
        id:1,
        name:'陈斌'
      },
      {
        id:2,
        name:'陈1斌'
      },
      {
        id:3,
        name:'陈11斌'
      }
    ],
    banner:[]
    }
  }
  render() {
    const {msg,list,banner}=this.state
    return (
      <div>
        Main
        <MainBar msg={msg} list={list} banner={banner}></MainBar>
      </div>
    )
  }
  componentDidMount()
  {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res=>
    {
      const  banner=res.data.data.banner.list
      this.setState({
        banner:banner
      })
    }
    )
  }
}
