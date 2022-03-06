import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  renderGlasses = () => {
    const { arrGlasses,changeGlasses } = this.props;
    return arrGlasses.map((item, index) => {
      return (
        <div className="" key={index}>
          <GlassesItem glass={item} changeGlasses={changeGlasses}/>
        </div>
      );
    });
  };
  render() {
    return <div>
        <div
          className="bg-light container text-center p-5 mt-5 d-flex justify-content-center"
          style={{marginTop:"100px"}}
        >
            {this.renderGlasses()}
        </div>
    </div>;
  }
}
