import React from "react";
import '../promoção/promo.css'
import Promo from '../carroussel/imgs/promocao.jpg'


function ImagePromo () {
    return (
        <div className="promo">
            <a href="">
                <img src={Promo}/>
            </a>
        </div>
    )
}

export default ImagePromo