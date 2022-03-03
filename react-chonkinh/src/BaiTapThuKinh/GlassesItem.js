import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    let {glass,changeGlasses} = this.props;
    return (
      <img 
      style ={{width:'100px',cursor:'pointer',marginRight:'18px'}}
      src={glass.url} 
      onClick={()=>{
        changeGlasses(glass)
      }}
       />
    );
  }
}
