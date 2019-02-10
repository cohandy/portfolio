import React from 'react';
import Loading from '../../layouts/Loading.js';
import './project.css';

class ProjectBlock extends React.Component {
    constructor(props) {
        super(props);
        this.details = this.props.project.details;
        this.state = {
            loading:true
        }
    }

    componentDidMount() {
        if (this._video) {
          this._video.muted = "true";
        }
    }

    handleLoad() {
        this.setState({
            loading: false
        });
    }

    render() {
        //`url(${require(`../../assets/${this.details.backgroundImage}`)})`
        let blockStyle = {
            backgroundColor: this.details.backgroundColor
        }
        //determine where current slide is relative to current slide
        let blockClasses = ["l-block"];
        if(this.props.project.active) {
            blockClasses.push("is-active");
        } else if(this.props.activeBlockIndex > this.props.blockIndex) {
            blockClasses.push("is-above");
        } else {
            blockClasses.push("is-below");
        }
        let loading = "";
        if(this.state.loading) {
            loading = <Loading />
        }
        //view site, view code buttons
        let siteBlockButton = "",
            codeBlockButton = "";
        if(this.details.website) {
            let buttonClasses = ["p-block_button"];
            if(!this.details.code) {
                buttonClasses.push("p-block_button--border");
            }
            if(this.details.textStyles.color === "#111111") {
                buttonClasses.push("p-block_button--black");
            }
            siteBlockButton = <a className={buttonClasses.join(' ')} href={this.details.website} target="_blank" style={this.details.textStyles}>
                                    <span className="p-block_button_text">VIEW SITE</span>
                               </a>
        }
        if(this.details.code) {
            let buttonClasses = ["p-block_button", "p-block_button--border"];
            if(this.details.website) {
                buttonClasses.push("p-block_button--right");
            }
            if(this.details.textStyles.color === "#111111") {
                buttonClasses.push("p-block_button--black");
            }
            codeBlockButton = <a className={buttonClasses.join(' ')} href={this.details.code} target="_blank" style={this.details.textStyles}>
                                <span className="p-block_button_text">VIEW CODE</span>
                              </a>
        }
        return (
            <div className={blockClasses.join(" ")} style={blockStyle}>
                {loading}
                <div className="l-project-block">
                    <div className="p-block">
                        <div className="p-block_left">
                            <h1 className="p-block_title" style={this.details.textStyles}>{this.details.title}</h1>
                            <p className="p-block_description" style={this.details.textStyles}>{this.details.description}</p>
                            <div className="p-block_features">
                                <div className="p-block_features_title" style={this.details.textStyles}>Built with:</div>
                                {
                                    this.details.features.map((feature, index) => {
                                        return (
                                            <span 
                                                className={this.details.textStyles.color === "#111111" ? "p-block_feature p-block_feature--black" : "p-block_feature"}
                                                key={`${this.details.title}-feature-${index}`} 
                                                style={this.details.textStyles}>{feature}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <div className="p-block_buttons">
                                {siteBlockButton}
                                {codeBlockButton}
                            </div>
                        </div>
                        <div className="p-block_right">
                            {
                              this.details.video
                              ?
                              <video autoPlay loop muted="" playsInline className="p-block_video" ref={(el) => this._video = el}>
                                <source src={require(`../../assets/${this.details.video}`)}/>
                              </video>
                              :
                              <img src={require(`../../assets/${this.details.mainImage}`)} className="p-block_video" />
                            }
                        </div>
                    </div>
                </div>
                <img src={require(`../../assets/${this.details.backgroundImage}`)} alt={`${this.details.title} Background`} className="p-block_background-image" style={this.details.backgroundImageStyles} onLoad={this.handleLoad.bind(this)}/>
            </div>
        )
    }
}

export default ProjectBlock;