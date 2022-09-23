import React from "react"
import { useState } from "react";
import  '../produtoVisu/ProdutoVisu.css'
import img1 from '../produtoVisu/img/banner.webp'
import img2 from '../produtoVisu/img/banner2.webp'
import img3 from '../produtoVisu/img/miniatura2.webp'
import imgball from '../produtoVisu/img/bola.jpg'
import CalcFrete from "../calcFrete/CalcFrete"


function ProdutoVisu() {
    const [imagemPrincipal, setImagemPrincipal] = useState(img1)
        
    return (
       
        <>
            <div className="container-produto">      
                <div className="container-left-produto">
                    <img id="imgMain" src={imagemPrincipal} alt="" className="img-main" />
                    
                </div>

                <div className="container-right-produto">
                    <h1 className="title-product">TÊNIS NIKE SHOX NZ SE - PRETO E VERMELHO</h1>
                    <div className="div-img-product">
                        <img src={img1} onClick={() => setImagemPrincipal(img1)} className="img-product" alt=""/>
                        <img src={img2} onClick={() => setImagemPrincipal(img2)} className="img-product" alt=""/>
                        <img src={img3} onClick={() => setImagemPrincipal(img3)} className="img-product" alt=""/>
                    </div>
                    <p className="text-product">O Tênis Nike Shox Nz Se foi desenvolvido para os homens que não dispensam conforto e nem estilo. Uma ótima pedida para compor a produção e aproveitar a casualidade do dia a dia.</p>
                </div>                        
            </div>
            <div className="info-product">
                <div className="info-left">
                    <div class="preco">R$ 359,99</div>
                    <div class="infoeconomia">Economia de  R$ 340,00 (48%) em até 9x de 40,00</div>
                    <div class="infonet">Vendido e enviado por <a href="" >TERASHOP</a></div>
                    <div class="cor">Cor: Preto e Vermelho.</div>
                    <div className="img-cor">
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />
                    </div>
                    <div class="tamanho">
                        Tamanho:
                        <form method="POST">
                            <select name="" id="">
                                <option>Num 36</option>
                                <option>38</option>
                                <option>40</option>
                                <option>42</option>
                                <option>44</option>
                                <option>46</option>
                            </select>
                        </form>
                    </div>                
                </div>
                
                <div className="info-rigth">
                    <CalcFrete />
                    
                    <div class="comprar">
                        <a href="">COMPRAR</a>
                    </div>  
                    <div className="img-ball">
                        <img src={imgball} alt="" />
                    </div>  
                    <div className="img-tenis-animation">
                        <img src={img1} alt="" />
                    </div>            
                </div>
            </div>
        </>
)
}

export default ProdutoVisu