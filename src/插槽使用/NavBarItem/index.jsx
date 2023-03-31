import React, { Component } from 'react'

export default class NavBarItem extends Component {
  constructor(props)
  {
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div>
        <div>
          {this.props.children[0]}
        </div>
        <div>
        {this.props.children[1]}
          </div>
          <div>
          {this.props.children[2]}
          </div>
      </div>
    )
  }
}
