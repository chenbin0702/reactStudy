import React, { Component } from 'react'
import ClassNames from './classnames库/ClassNames'
// import CssInJs from './css_in_js写法/CssInJs'
// import Form from './受控和非受控组件/Form'
// import Contorl from './受控和非受控组件/Contorl'
// import Father from './子传父/Father'
// import NavBar from './插槽使用/NavBar'
// import Main from './组件嵌套/Main'
// import TabControl from './组件间通信/TabControl'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Main>s
        </Main>
        <Father></Father>
        <TabControl></TabControl>
         <NavBar></NavBar>
         <Contorl></Contorl>
         <Form/>
         <CssInJs></CssInJs> */}
        <ClassNames></ClassNames>
      </div>
    )
  }
}

