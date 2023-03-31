import React, { Component } from 'react'
import "./index.css";
export default class Tabs extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      currentIndex:0
    }
  }
  changeIndex(index)
  {
    this.props.changeText(index)
    this.setState({
      currentIndex:index
    })
  }
  render() {
    const {title} = this.props;
    const {currentIndex} = this.state;
    return (
      <div className='tabs'>
        {title.map((item,index)=>{
           return(
            <div key={index} className={`tabs-item ${index === currentIndex? 'active':''}`}>
              <span className='text' onClick={()=>this.changeIndex(index)}> {item}</span>
              </div>
          )})
        }
       
      </div>
    )
  }
}
