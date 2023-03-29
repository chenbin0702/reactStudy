import React from 'react';
import { data } from './data'
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      list:data
    }
  }
  getTable()
  {
    let {list}=this.state
    return(
    <div>
      <table>
        <thead>
         <th>序号</th>
         <th>书名</th>
         <th>数量</th>
         <th>价格</th>
         <th>操作</th>
        </thead>
         <tbody>
           {list.map((item,index)=>{
            return(
              <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={()=>this.changeNum(index,-1)}>-</button>
                  {item.num}
                  <button onClick={()=>this.changeNum(index,1)}>+</button>
                  </td>
                <td>{ '￥'+item.price}</td>
                <td>
                <button onClick={()=>this.deleteItem(index)}>删除</button>
                </td>
              </tr>
            )
           })}
         </tbody>
      </table>
      <div>总价格: {'￥'+this.getTotalPrice()}</div>
    </div>
    )
  }
  changeNum(index,num)
  {
    let newList=[...this.state.list]
    newList[index].num+=num
    this.setState({list:newList})
  }
  getNotInfo()
  {
    return <div>抱歉没有购物信息</div> 
  }
   getTotalPrice()
   {
    return this.state.list.reduce((pre,item)=>{
        return pre+item.num*item.price
    },0)
      
   }
   deleteItem(index)
   {
    let newList=[...this.state.list]
    newList.splice(index,1)
    this.setState({list:newList})
   }
  render()
  {
    return this.state.list.length===0? this.getNotInfo():this.getTable()
  }
}
export default App