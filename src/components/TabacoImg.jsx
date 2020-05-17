import React from 'react';

const TabacoImg = ({imagem}) => {
    return (
        <div style={{ width: "20vw" }}>
            <img src={imagem} style={{height: "40vh", width: "25vw"}}></img>
        </div>
    )
};

export default TabacoImg;