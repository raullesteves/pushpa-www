import React from 'react';
import SocialMedia from "./../components/SocialMedia";
import { matinho } from "./../contants/images"

const Kumbaya = ({imagem, nome, ervas, descricao}) => {
    return (
        <div className="defaultFontSize fontColorBrown screen" style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ padding: "1rem", height: "10vh", backgroundColor: "#7d4e18", display: "flex", justifyContent: "space-between" }}>
            <span style={{display: "flex", alignItems: "center"}}>
                    <img src={matinho} style={{ height: "5rem", width: "5rem", transform: "scaleX(-1)" }}></img>
                    <span style={{ color: "white", fontSize: "4rem", fontFamily: "Changa-Bd", display: "flex", alignItems: "flex-end", color: "#72c64f" }}>KUMBAYA</span>
                    <img src={matinho} style={{ height: "5rem", width: "5rem" }}></img>
                </span>
            </header>
            <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
                <aside style={{ width: "40vw", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", width: "30vw", flexDirection: "column", justifyContent: "center", backgroundColor: "#a2631d", height: "60vh", borderRadius: "5%", alignItems: "center" }}>
                        <img src={imagem} style={{height: "50vh", width: "25vw", }}></img>
                    </div>
                </aside>
                <main className="mainKumbaya" style={{ width: "60vw" }}>
                    <div style={{ display: "flex", width: "40vw", flexDirection: "column", justifyContent: "center", backgroundColor: "#a2631d", height: "60vh", borderRadius: "5%" }}>
                        <span style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <img src={matinho} style={{ height: "5rem", width: "5rem", transform: "scaleX(-1)" }}></img>
                            <span className="fontQuicksand" style={{ color: "#72c64f", fontFamily: "OpenSans-Rg", fontWeight: "bold", fontSize: "3rem", fontWeight: "bold", margin: "2rem", textAlign: "center" }}>{nome}</span>
                            <img src={matinho} style={{ height: "5rem", width: "5rem" }}></img>
                        </span>
                        <span className="fontQuicksand" style={{ fontFamily: "OpenSans-Rg", fontSize: "1rem", fontWeight: "bold", color: "#f8e0b8", margin: "2rem", textAlign: "center" }}>{ervas}</span>
                        <span className="fontQuicksand" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", margin: "2rem", textAlign: "center" }}>{descricao}</span>
                    </div>
                </main>
            </div>
            <SocialMedia horizontal={"40%"}/>
        </div>
    )
};

export default Kumbaya;