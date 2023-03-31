import React, { Component } from 'react'
import Father from './子传父/Father'

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
      </div>
    )
  }
}

