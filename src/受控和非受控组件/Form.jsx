import React, { Component } from 'react'

export class Form extends Component {
  constructor()
  {
    super()
    this.state={
      username:'',
      password:'',
      hobbies:[
        {value:"sing",text:'唱',isChecked:false},
        {value:"dacne",text:'跳',isChecked:true},
        {value:"rap",text:'rap',isChecked:true}
      ]
    }
  }
  render() {
    const {username,password,hobbies} = this.state;
    return (

      <div>
        <form onSubmit={(e)=>this.submitData(e)}>
          <label for="">
            账号
          <input type="text" 
           value={username}
           name="username"
           onChange={(e)=>this.handleChange(e)} />
          </label>
          <label for="">
            密码
          <input type="password" 
           value={password}
           name="password"
           onChange={(e)=>this.handleChange(e)} />
          </label>
          <div>
            你的爱好:
            {hobbies.map((item,index)=>{
              return(
                <label htmlFor={item.value}>
                  <input type="checkbox"  id={item.value} checked={item.checked}
                  onChange={(e)=>this.handleChecked(e,index)} />
                  <span>{item.text}</span>
                </label>
              )
            })}
          </div>
          <button type="submit">注册</button>
        </form>
      </div>
    )
  }
  submitData(event)
  {
    event.preventDefault()
    console.log(event);
    console.log(this.state);
    const hobby=this.state.hobbies.filter(item=>item.isChecked).map(item=>item.text)
    console.log(hobby);
  }
  handleChange(e)
  {
    let keyName=e.target.name
    this.setState(
      {
        [keyName]:e.target.value
      }
    )
  }
  handleChecked(e,index)
  {
     const hobbies=[...this.state.hobbies]
     hobbies[index].isChecked=e.target.checked
     this.setState({
      hobbies:hobbies
     })
  }
}

export default Form