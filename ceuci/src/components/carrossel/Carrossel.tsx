import React from "react";
import Carousel from "react-elastic-carousel";

function Carrossel() {
  var items = [
    {
      url: "https://images.unsplash.com/photo-1509100194014-d49809396daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",},
    { url: "https://cdn.discordapp.com/attachments/989142309927006220/1009158559935774760/mulher-agricultora.jpg" ,},
    {
      url: "https://i.pinimg.com/564x/38/60/9c/38609cf6ae8da0a527e8dddda390f0a0.jpg",},
    {
      url: "https://i.pinimg.com/564x/30/e3/78/30e37826f26187b4b4d0f170c9ff378a.jpg",}
  ];

  return (
    <Carousel isRTL={false} enableAutoPlay={true} showArrows={false} pagination={false}   autoPlaySpeed={4000}>
      {items.map((item) => (
        <>
        <img src={item.url} alt="fotos do carrossel" className="tamanho"/>
        </>
      ))}
    </Carousel>
  );
}

export default Carrossel;
