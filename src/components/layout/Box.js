import React from "react";
import Image from "./Image";
// import image_1 from "../images/image-01.jpg";
// import image_3 from "../images/image-03.jpg";
// import image_4 from "../images/image-04.jpg";
// import image_5 from "../images/image-05.jpg";
// import image_6 from "../images/image-06.jpg";
// import image_7 from "../images/image-07.jpg";
// import image_8 from "../images/image-08.jpg";
// import image_9 from "../images/image-09.jpg";

const Box = () => {
  return (
    <div className="card text-center">
      <Image />

      <h3>Login</h3>
      <div>
        <a
          href="google.com"
          className="btn btn-dark btn-sm my-1
          "
        >
          More
        </a>
      </div>
    </div>
  );
};

export default Box;
