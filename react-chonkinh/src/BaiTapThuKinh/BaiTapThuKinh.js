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
  width: "62%",
  top: "23%",
  right: "18%",
  opacity: 0.7,
}
const infoGlasses = {
  width: "100%",
  bottom: 0,
  backgroundColor: "rgba(255,127,0,.5)",
  paddingLeft: "15px",
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
            <div className="row d-flex justify-content-between">
              <div className="col-3">
                <div className="card bg-light text-white">
                  <img className="card-img" src="./glassesImage/model.jpg" alt />
                  
                  <div className="card-img-overlay">
                    <h4 className="card-title"></h4>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-3">            
                <div className="card bg-light text-white">
                  <img className="card-img" src="./glassesImage/model.jpg" alt />
                  <img
                    className="position-absolute"
                    style={styleGlasses}
                    src={this.state.imgSrc.url}
                  />
                  <div className="position-absolute pl-2 p-1 text-left" style={infoGlasses}>
                    <h3 className="card-title m-0 p-0 ">{this.state.imgSrc.name}</h3>
                    <p className="card-text m-0 p-0 ">{this.state.imgSrc.desc}</p>

                  </div>
                </div>

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
