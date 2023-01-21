import { useState } from 'react';
import styles from './Pictures.module.css';

function Pictures() {
    const [isMouseEntered, setIsMouseEnetered] = useState(false);
    const [bgColor, setBgColor] = useState("#ffff00");

    const onMouseOverHandler = () => {
        if (!isMouseEntered) {
            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            setBgColor(randomColor);
            setIsMouseEnetered(true);
        }
    }

    const onMouseOutEvenet = () => {
        setBgColor("#ffff00")
        setIsMouseEnetered(false);
     }

    return (
        <div className={`${styles.picture}`} 
            style={{backgroundColor: `${bgColor}`}}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutEvenet}></div>
    );
}

export default Pictures;