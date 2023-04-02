import React, { PureComponent } from 'react'

export default class Contorl extends PureComponent {
  constructor()
  {
    super()
    this.state={
      msg:''
    }
  }
  changeInput(event)
  {
    this.setState({
      msg:event.target.value
    })
  }
  render() {
    const {msg} = this.state;
    return (
      <div>
        {/* 受控组价 */}
       
        <input type="text" value={msg} onChange={e=>this.changeInput(e)}></input>
         {/* 非受控组价 */}
        <input type="text" />
        <p>{msg}</p>
      </div>
    )
  }
}
