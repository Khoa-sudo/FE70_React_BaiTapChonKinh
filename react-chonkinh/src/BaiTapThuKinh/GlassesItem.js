import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    let {glass,changeGlasses} = this.props;
    return (
      <img 
      style ={{width:'100%',cursor:'pointer',marginRight:'20px'}}
      src={glass.url} 
      onClick={()=>{
        changeGlasses(glass)
      }}
       />
    );
  }
}
