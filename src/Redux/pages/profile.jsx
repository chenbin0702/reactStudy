import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import { addNumberAction } from '../store/actionCreators';
class profile extends PureComponent {
  addNum(num)
  {
   this.props.addNum(num)
  }
  render() {
    const {counter} = this.props;
    return (
      <div>
        profile conuter:{counter}
        <button onClick={()=>this.addNum(2)}>+2</button>
        <button onClick={()=>this.addNum(10)}>+10</button>
      </div>
    );
  }
}
const mapStateToProps=(state=>{
  return{
    counter:state.counter
  }
})
const mapDispatchToProps=(dispatch)=>({
   addNum(num)
  {
    dispatch(addNumberAction(num))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(profile)
