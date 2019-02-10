import React from 'react';

import './navigation.css';

class Navbar extends React.Component {
    render() {
        let currentBlock = this.props.blocks[this.props.activeBlockIndex], 
            textStyles = {
                color: currentBlock.navColor
            }
        let navLogoStyles = {
            color: currentBlock.navColor
        }
        if(this.props.activeBlockIndex === 0) navLogoStyles.opacity = "0";
        return (
            <nav className="navbar">
                <div className="navbar_logo" style={navLogoStyles}>
                    <div className="navbar_logo_top">CONNOR</div>
                    <div className="navbar_logo_bottom">HANDY</div>
                </div>
                <a href="https://www.linkedin.com/in/connor-handy-a64aa4120/" className={currentBlock.navColor === "#FFFFFF" ? "navbar_link" : "navbar_link navbar_link--black"} style={textStyles} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a href="https://github.com/cohandy" className={currentBlock.navColor === "#FFFFFF" ? "navbar_link" : "navbar_link navbar_link--black"} style={textStyles} target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="mailto:cohandy@gmail.com" className={currentBlock.navColor === "#FFFFFF" ? "navbar_link" : "navbar_link navbar_link--black"} style={textStyles}>COHANDY@GMAIL.COM</a>
            </nav>
        )
    }
}

export default Navbar;