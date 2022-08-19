import React from 'react';
import CarouselProduto from 'react-elastic-carousel';
import Produto from "../../../models/Produto";



import './Carousel.css'


export default function Carousel(_produto: Produto[]){
    //

    var items = [
        { },
        { },
        { },


    ]

    return (
        < CarouselProduto isRTL={false}>
            {
                _produto.map(item => (
                    <>
                        <img className='img' src={item.foto} alt="Item" />
                    </>
                ))
            }
        </CarouselProduto>
    )
}