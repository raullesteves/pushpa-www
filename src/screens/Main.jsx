import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { floral, americanasIcone, mercadoLivreIcone, magaluIcone, shopeeIcone } from "./../contants/images"

const Main = () => {
    const screenWidth = window.outerWidth;
    if (screenWidth < 1000) {
        return (
            <div className="defaultFontSize screen fontColorBrown" style={{ display: "flex", flexDirection: "column" }}>
                <main style={{backgroundImage: `url(${floral})`, display: "flex", justifyContent: "center"}}>
                    <div className="has-outline-mobile" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        <span className="fontQuicksand" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>PUSHPA</span>
                        <span className="fontQuicksand" style={{ fontSize: "2rem" }}>PRODUTOS DA TERRA</span>
                    </div>
                </main>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: ".4rem"}}>
                        {/* <span className="fontChanga textAlignCenter" style={{ fontSize: "2rem", fontSize: (screenWidth <= 320 ? ".9em" : "1em") }}>Onde comprar:</span> */}
                        <a href="https://www.americanas.com.br/lojista/pushpa" target="_blank" style={{textDecoration: "none"}}>
                            <img src={americanasIcone} alt="lojas-americanas-icone" height="25px"/>
                            <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem", fontSize: (screenWidth <= 320 ? ".9em" : "1em") }}>Americanas</span>
                        </a>
                        <a href="https://pushpaprodutosnaturais.mercadoshops.com.br/" target="_blank" style={{textDecoration: "none"}}>
                            <img src={mercadoLivreIcone} alt="mercado-livre-icone" height="25px"/>
                            <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem", fontSize: (screenWidth <= 320 ? ".9em" : "1em") }}>Mercado Livre</span>
                        </a>
                        <a href="https://www.magazineluiza.com.br/lojista/pushpa/" target="_blank" style={{textDecoration: "none"}}>
                            <img src={magaluIcone} alt="magalu-icone" height="25px"/>
                            <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem", fontSize: (screenWidth <= 320 ? ".9em" : "1em") }}>Magazine Luiza</span>
                        </a>
                        <a href="https://shopee.com.br/pushpaprodutosdaterra" target="_blank" style={{textDecoration: "none"}}>
                            <img src={shopeeIcone} alt="shopee-icone" height="25px"/>
                            <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem", fontSize: (screenWidth <= 320 ? ".9em" : "1em") }}>Shopee</span>
                        </a>
                        <a className="fontChanga textAlignCenter fontColorBrown" href="https://www.instagram.com/pushpaprodutosdaterra/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" color={"black"} />
                            <span className="fontQuicksand" style={{ marginLeft: "1rem", fontWeight: "bold", fontSize: (screenWidth <= 320 ? ".9em" : "1em")}}>
                                @pushpaprodutosdaterra
                            </span>
                        </a>
                        <a className="fontChanga textAlignCenter fontColorBrown" href="https://api.whatsapp.com/send?phone=5513997153660&amp;text=Ol%C3%A1!%20:)" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" color={"black"} />
                            <span className="fontQuicksand" style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                                (13) 99715-3660
                            </span>
                        </a>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="defaultFontSize screen fontColorBrown" style={{ display: "flex" }}>
                <aside style={{ width: "30vw", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <span className="fontChanga textAlignCenter" style={{ fontSize: "2rem" }}>Onde comprar:</span>
                    <a href="https://www.americanas.com.br/lojista/pushpa" target="_blank" style={{textDecoration: "none"}}>
                        <img src={americanasIcone} alt="lojas-americanas-icone" height="25px"/>
                        <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem" }}>Americanas</span>
                    </a>
                    <a href="https://pushpaprodutosnaturais.mercadoshops.com.br/" target="_blank" style={{textDecoration: "none"}}>
                        <img src={mercadoLivreIcone} alt="mercado-livre-icone" height="25px"/>
                        <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem" }}>Mercado Livre</span>
                    </a>
                    <a href="https://www.magazineluiza.com.br/lojista/pushpa/" target="_blank" style={{textDecoration: "none"}}>
                        <img src={magaluIcone} alt="magalu-icone" height="25px"/>
                        <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem" }}>Magazine Luiza</span>
                    </a>
                    <a href="https://shopee.com.br/pushpaprodutosdaterra" target="_blank" style={{textDecoration: "none"}}>
                        <img src={shopeeIcone} alt="shopee-icone" height="25px"/>
                        <span className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "2rem", marginLeft: "1rem" }}>Shopee</span>
                    </a>
                    <Link to="/catalogo" className="fontChanga textAlignCenter fontColorBrown" style={{ fontSize: "3rem", textDecoration: "none" }}>CLIQUE PARA VER O CATÁLOGO DE PRODUTOS</Link>
                    <a className="fontChanga textAlignCenter fontColorBrown" href="https://www.instagram.com/pushpaprodutosdaterra/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" color={"black"} />
                        <span className="fontQuicksand" style={{marginLeft: "1rem", fontWeight: "bold"}}>
                            @pushpaprodutosdaterra
                        </span>
                    </a>
                    <a className="fontChanga textAlignCenter fontColorBrown" href="https://api.whatsapp.com/send?phone=5513997153660&amp;text=Ol%C3%A1!%20:)" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" color={"black"} />
                        <span className="fontQuicksand" style={{marginLeft: "1rem", fontWeight: "bold"}}>
                            (13) 99715-3660
                        </span>
                    </a>
                    <Link className="fontColorBrown fontChanga" style={{textDecoration: "underline", marginTop: "2rem"}} to="/catalogo">Ver catalogo</Link>
                </aside>
                <main className="mainScreenOne" style={{backgroundImage: `url(${floral})`}}>
                    <div className="has-outline" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <span className="fontQuicksand" style={{ fontSize: "6rem", fontWeight: "bold" }}>PUSHPA</span>
                        <p className="fontQuicksand" style={{ fontSize: "3rem", fontWeight: "bold" }}>PRODUTOS DA TERRA</p>
                    </div>
                </main>
            </div>
        )
    }
};

export default Main;