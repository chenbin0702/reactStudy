import React, { Component } from 'react'
import PropTypes from 'prop-types';
 class MainBar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props)
  {
     super(props)
     
  }
  render() {
    let {msg,list}=this.props
    return (
      <div>{msg}
      <ul>
        {list.map((item)=>{
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
      </div>
    )
  }
}
// eslint-disable-next-line react/no-typos
MainBar.PropTypes = {
   list:PropTypes.array
}

export default MainBar

  

