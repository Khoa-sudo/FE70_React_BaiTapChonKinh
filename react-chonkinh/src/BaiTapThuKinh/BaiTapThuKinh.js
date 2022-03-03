import React, { Component } from "react";
import GlassesList from "./GlassesList";

//Data
let dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

//css
const styleGlasses = {
  width: "150px",
  top: "75px",
  right: "262px",
  opacity: "0.7",
};
const infoGlasses = {
  width: "250px",
  textAlign: "left",
  left: "461px",
  top: "199px",
  backgroundColor: "rgba(255,127,0,.5)",
  paddingLeft: "15px",
  height: "105px",
};

export default class BaiTapThuKinh extends Component {
  state = {
    imgSrc: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  changeGlasses = (newGlasses) => {
    this.setState({
      imgSrc: newGlasses,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "2000px" }}
        >
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    alt="model"
                    src="./glassesImage/model.jpg"
                  />
                  <img
                    className="position-absolute"
                    style={styleGlasses}
                    src={this.state.imgSrc.url}
                  />
                  <div className="position-absolute" style={infoGlasses}>
                    <span
                      style={{ color: "whitesmoke", fontSize: "18px" }}
                      className="font-weight-bold"
                    >
                      {this.state.imgSrc.name}
                    </span>                    
                    <br></br>
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>
                      {this.state.imgSrc.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  alt="model"
                  src="./glassesImage/model.jpg"
                ></img>
              </div>
            </div>

            {/* Hiển thị các kính được chọn */}
            <GlassesList
              arrGlasses={dataGlasses}
              changeGlasses={this.changeGlasses}
            />
          </div>
        </div>
      </div>
    );
  }
}
