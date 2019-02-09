import React from 'react';

import icon from '../assets/loading-icon.svg';

const Loading = () => {
    return (
        <div className="l-loading">
            <div className="loading-icon">
                <img src={icon} alt="loading-icon" className="loading-icon_image"/>
            </div>
            <p className="loading_text">LOADING...</p>
        </div>
    )
}

export default Loading;