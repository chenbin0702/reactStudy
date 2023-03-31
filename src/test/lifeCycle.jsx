import { Component } from "react";

class LifeCycle extends Component
{
  constructor()
  {
    super()
    console.log("constructor");
    this.state={
      message:'hello'
    }
  }
  changeText()
  {
    this.setState({
      message:'111'
    })
  }
  render()
  {
    console.log("render");
    return <div>{this.state.message}
    <button onClick={()=>this.changeText()}>改变</button>
    </div>
  }
  // 组件被渲染到DOM:挂载到DOM上
   componentDidMount()
   {
    console.log("componentDidMount");
   }
   componentDidUpdate()
   {
    console.log("componentDidUpdate");
   }
   componentWillUnmount()
   {

   }
}
export default LifeCycle
