import React, { PureComponent } from 'react'
import classNames from 'classnames';
export default class ClassNames extends PureComponent {
  constructor()
  {
    super()
    this.state={
      isActive:true
    }
  }
  changeActive()
  {
    let newValue=!this.state.isActive
    this.setState({
      isActive:newValue
    })
  }
  render() {
    const {isActive} = this.state;
    return (
      <div className={classNames('abs',{bbb:isActive})}>ClassNames
       <button onClick={()=>this.changeActive()}>改变</button>
      </div>
    )
  }
}
