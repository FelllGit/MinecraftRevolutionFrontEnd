import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

const MainPageHeader = ({ picture }) => {

    const location = useLocation();
    if (location.pathname !== '/'){
      return;
    }

    if(picture.current){
        console.log("a");
    }
    else {
        console.log(picture);
    }

    return (
        <article className="article" ref={picture}>
                <picture className="picture">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610018894146-BHQTXQJRRKBVQF2FD6RK/43.jpg"
                        alt="background"
                    />
                </picture>
                <div className="header">
                    <h1>Відкрий новий досвід</h1>
                    <h3>
                        Наш проєкт - це місце, де твої мрії стають
                        реальністю
                    </h3>
                </div>
            </article>
    );
};

export default MainPageHeader;
