import React, { PureComponent } from "react";
import {AppWrapper} from './style';
export default class CssInJs extends PureComponent {
  constructor()
  {
    super()
    this.state={
      color:'red',
      size:30
    }
  }
  render() {
    const {color,size} = this.state
    return <AppWrapper color={color} size={size}>
      <div className="section">
        <div className="title">标题</div>
        <div className="content">内容</div>
      </div>
    </AppWrapper>;
  }
}
