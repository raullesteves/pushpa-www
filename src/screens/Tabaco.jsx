import React from 'react';
import SocialMedia from "./../components/SocialMedia";
import TabacoImg from "./../components/TabacoImg";
import {tabaco1, tabaco2, matinho} from "./../contants/images"

const ScreenOne = () => {
    return (
        <div className="defaultFontSize fontColorBrown screen" style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ padding: "1rem", height: "10vh", backgroundColor: "#7d4e18", display: "flex", justifyContent: "space-between" }}>
                <span style={{display: "flex", alignItems: "center"}}>
                    <img src={matinho} style={{ height: "5rem", width: "5rem", transform: "scaleX(-1)" }}></img>
                    <span style={{ color: "white", fontSize: "4rem", fontFamily: "Changa-Bd", display: "flex", alignItems: "flex-end", color: "#72c64f" }}>TABACO NATURAL</span>
                    <img src={matinho} style={{ height: "5rem", width: "5rem" }}></img>
                </span>
                <span style={{ color: "white", fontSize: "3rem", fontFamily: "Changa-Bd", display: "flex", alignItems: "flex-start", color: "#f8dfb8" }}>Virginia Blend</span>
            </header>
            <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
                <div style={{display: "flex", justifyContent: "space-around", width: "60%"}}>
                    <div style={{ marginTop: "10vh" }}>
                        <TabacoImg imagem={tabaco1} />
                    </div>
                    <div style={{ marginTop: "20vh" }}>
                        <TabacoImg imagem={tabaco2} />
                    </div>
                </div>
                <div className="fontQuicksand" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40%", textAlign: "center", color: "white" }}>
                    Tabaco 100% natural,<br/> desfiado, do tipo virginia,<br/> sem aditivos químicos,<br/> conservantes e aromatizantes. <br/>Fumo de qualidade, <br/>com sabor suave, <br/>produzido no Sul do Brasil.
                </div>
            </div>
            <SocialMedia horizontal={"45%"}/>
        </div>
    )
};

export default ScreenOne;