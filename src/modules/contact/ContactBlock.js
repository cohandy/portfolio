import React from 'react';

import './contact.css';

class ContactBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
        this.personalSkills = ["Node.js", "Express.js", "React", "MobX", "CSS/Less", "MongoDB", "MySQL", "Python"];
        this.workSkills = ["Javascript", "jQuery", "Liquid (Shopify)", "HTML5", "CSS3", "PHP", "MySQL"];
    }
    
    handleLoad() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <div className="l-block">
                <div className={this.props.block.active ? "l-contact-block is-active" : "l-contact-block"}>
                    <div className="contact-col contact-col--right contact-col--full">
                        <div className="contact-col_content">
                            <h4 className="contact-col_title">ABOUT ME</h4>
                            <div className="contact-col_content_text">
                                <p className="contact-col_description contact-col_description--full">
                                  For over five years now I’ve been developing web applications and learning programming languages. I started with the basics of HTML/CSS, to using PHP and MySQL, and then to Node.js and other languages and frameworks like Python and React. I started my career working at a web design shop honing my CSS and design skills, while moonlighting on personal React and Node projects, which landed me my next job at an enterprise software company, AtScale. 
                                  <br/><br/>
                                  At AtScale I got to challenge myself and stretch out my dev skills building applications with Node,js, Express.js, and React. I built AtScale’s public website, documentation platform, and worked on their main OLAP cube modeling app. I had a key role in many teams, every day I was faced with new problems to solve and another opportunity to improve my multi-tasking and communication skills. I see myself as a highly flexible developer, able to work with any team and understand the goal of each project. I'm dedicated and am extremely passionate about my work, I see every project or feature as a chance to enhance my knowledge and better myself as a developer and co-worker.
                                  <br/><br/>
                                  While not at work or researching my next side project, I’m playing whatever video game I’m obsessed with that week, checking out what’s on netflix, or biking on the bay trail. 
                                </p>
                                <div className="contact-col_skills">
                                    <div className="p-block_features_title">Active Skills:</div>
                                    {
                                        this.personalSkills.map((feature, index) => {
                                            return (
                                                <span
                                                    className="p-block_feature"
                                                    key={`${feature}-personal-skill`}
                                                    >{feature}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="contact-options">
                                <p className="contact-options_text">For any inquiries, please contact me at:</p>
                                <a href="mailto:cohandy@gmail.com" className="contact-button">
                                    <span className="contact-button_text">cohandy@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <img src={require(`../../assets/contact-background-2.jpg`)} alt="Contact Background 2" className="contact-col_background-image" onLoad={this.handleLoad.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBlock;