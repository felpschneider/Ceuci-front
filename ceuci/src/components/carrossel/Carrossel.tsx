import React from "react";
import Carousel from "react-elastic-carousel";

function Carrossel() {
  var items = [
    {
      url: "https://i.pinimg.com/564x/81/a6/df/81a6dfc2c61a60e609e9f6098b022f6c.jpg",},
    { url: "https://i.pinimg.com/564x/4c/2d/70/4c2d70c51c1d1a20aa3f9bc1d2eff2a7.jpg" ,},
    {
      url: "https://i.pinimg.com/564x/38/60/9c/38609cf6ae8da0a527e8dddda390f0a0.jpg",},
    {
      url: "https://i.pinimg.com/564x/30/e3/78/30e37826f26187b4b4d0f170c9ff378a.jpg",}
  ];

  return (
    <Carousel isRTL={false}>
      {items.map((item) => (
        <div style={{
          background: `url({item.url})`,
          backgroundSize: "cover",
          height: "100vh",
        }}></div>
      ))}
    </Carousel>
  );
}

export default Carrossel;
