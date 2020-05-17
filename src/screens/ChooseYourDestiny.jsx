import React from 'react';
import SocialMedia from "./../components/SocialMedia";
import { opcaoTabaco, opcaoKumbaya } from "./../contants/images";

const ChooseYourDestiny = (direction) => {
    console.log(direction)
    const goToLeft = () => {
        document.querySelector(`.awssld__controls__arrow-left`).click();
    };
    const goToRight = () => {
        document.querySelector(`.awssld__controls__arrow-right`).click();
    };

    return (
        <div className="defaultFontSize screen" style={{ display: "flex", cursor: "pointer" }}>
            <aside onClick={goToLeft} className="chooseYourDestinyAside" style={{ justifyContent: "flex-start", backgroundImage: `url(${opcaoTabaco})`}}>
                <div className="chooseYourDestinyTitleDiv">
                    <span className="fontChanga textAlignCenter" style={{ fontSize: "3rem" }}>TABACO NATURAL</span>
                </div>
            </aside>
            <aside onClick={goToRight} className="chooseYourDestinyAside" style={{ justifyContent: "flex-end", backgroundImage: `url(${opcaoKumbaya})` }}>
                <div className={"chooseYourDestinyTitleDiv"}>
                    <span className="fontChanga textAlignCenter" style={{ fontSize: "3rem" }}>KUMBAYA</span>
                </div>
            </aside>
            <SocialMedia horizontal={"45%"} color={"white"} />
        </div>
    )
};

export default ChooseYourDestiny;