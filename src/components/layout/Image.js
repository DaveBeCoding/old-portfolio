import React, { Component } from "react";
import image_1 from "../images/image-01.jpg";
import image_3 from "../images/image-03.jpg";
// import image_4 from "../images/image-04.jpg";
// import image_5 from "../images/image-05.jpg";
// import image_6 from "../images/image-06.jpg";
// import image_7 from "../images/image-07.jpg";
// import image_8 from "../images/image-08.jpg";
// import image_9 from "../images/image-09.jpg";

class Image extends Component {
  render() {
    return (
      <div>
        <img
          src={image_1}
          alt="images.."
          className="round-img"
          style={{
            width: "500px",
            height: "500px",
            margin: "auto",
            display: "block",
          }}
        />
        <img
          src={image_3}
          alt="images.."
          className="round-img"
          style={{
            width: "500px",
            height: "500px",
            margin: "auto",
            display: "block",
          }}
        />
      </div>
    );
  }
}

export default Image;
