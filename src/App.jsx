import React, { Component } from 'react'
import Father from './子传父/Father'
import NavBar from './插槽使用/NavBar'

import Main from './组件嵌套/Main'
import TabControl from './组件间通信/TabControl'

export default class App extends Component {
  render() {
    return (
      <div>
        <Main>
        </Main>
        <Father></Father>
        <TabControl></TabControl>
         <NavBar></NavBar>
      </div>
    )
  }
}

