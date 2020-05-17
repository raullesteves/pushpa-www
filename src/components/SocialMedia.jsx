import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = ({horizontal, color = "black"}) => {
    return (
        <div style={{ display: "flex", position: "absolute", left: horizontal, bottom: "2%", width: "10vw", justifyContent: "space-between", alignItems: "center" }}>
            <a className="fontChanga textAlignCenter fontColorBrown" href="https://www.instagram.com/pushpaprodutosdaterra/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" color={color} />
            </a>
            <a className="fontChanga" href="https://www.instagram.com/pushpaprodutosdaterra/" target="_blank" rel="noopener noreferrer" style={{color: color}}>PUSHPA</a>
            <a className="fontChanga textAlignCenter fontColorBrown" href="https://api.whatsapp.com/send?phone=5513997153660&amp;text=Ol%C3%A1!%20:)" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" color={color} />
            </a>
        </div>
    )
};

export default SocialMedia;