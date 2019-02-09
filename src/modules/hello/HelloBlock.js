import React from 'react';

import Loading from '../../layouts/Loading.js';
import HelloText from './HelloText.js';

import './hello.css';
import background from '../../assets/hello-background.jpeg';
import backgroundOutline from '../../assets/hello-bckg-outline.png';
import downArrow from '../../assets/down-arrow.svg';

class HelloBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    handleLoad() {
        this.setState({
            loading: false
        })
    }

    render() {
        let loading = "";
        if(this.state.loading) {
            loading = <Loading/>
        }
        return (
            <div className="l-block">
                {loading}
                <div className={this.props.block.active ? "hello-block is-active" : "hello-block"}>
                    <HelloText loading={this.state.loading}/>
                    <div className="bottom-link" onClick={() => this.props.toNextBlock(1, null)}>
                        <p className="bottom-link_text">CHECK OUT MY LATEST WORK</p>
                        <img src={downArrow} alt="down arrow" className="bottom-link_image"/>
                    </div>
                    <img src={backgroundOutline} className="hello-block-outline" alt="Hello Background Outline"/>
                    <div className="hello-gradient">
                        <div className="hello-gradient_rotate"></div>
                    </div>
                    <img src={background} className="hello-block-background" alt="Hello Background" onLoad={this.handleLoad.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default HelloBlock;