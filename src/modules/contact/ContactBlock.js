import React from 'react';

import './contact.css';

class ContactBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
        this.personalSkills = ["React", "React Router V4", "MobX", "Redux", "Node.js", "MongoDB", "Mongoose", "Express"];
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
                    <div className="contact-col">
                        <div className="contact-col_content">
                            <h4 className="contact-col_title">WORK</h4>
                            <div className="contact-col_content_text">
                                <p className="contact-col_description">
                                    I've been in the professional space over a year now working with Sleepless Media, a web design agency
                                    specializing in highly customized Shopify and Wordpress websites. I've built and maintained a dozen projects this past year, 
                                    adhering to each step in the process. From setting up local/dev environments, to writing frontend/backend code. 
                                    To putting the final product on a production server.
                                    <br/><br/>
                                    Throughout those processes, I've had the opportunity to collaborate with designers and other coders to achieve a product
                                    that meets our and the clients standards. It's exciting to create something using the unique skills from those around you
                                    and I find giving/getting input to be one of my favorite parts of the job. You can check out some of the work we've created
                                    at <a href="https://owlcam.com" target="_blank" rel="noopener noreferrer">owlcam.com</a>, <a href="https://tepui.com" target="_blank" rel="noopener noreferrer">tepui.com</a>, and <a href="https://vogmask.com" target="_blank" rel="noopener noreferrer">vogmask.com</a>.
                                </p>
                                <div className="contact-col_skills">
                                    <div className="p-block_features_title">Active Skills:</div>
                                    {
                                        this.workSkills.map((feature, index) => {
                                            return (
                                                <span
                                                    className="p-block_feature"
                                                    key={`${feature}-work-skill`}
                                                >{feature}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <img src={require(`../../assets/contact-background-1.jpg`)} alt="Contact Background 1" className="contact-col_background-image"/>
                    </div>
                    <div className="contact-col contact-col--right">
                        <div className="contact-col_content">
                            <h4 className="contact-col_title">PERSONAL</h4>
                            <div className="contact-col_content_text">
                                <p className="contact-col_description">
                                    I've spent the last three years learning web development. Starting with the basics of HTML/CSS and manipulating
                                    the DOM with Javascript/jQuery, to using PHP and MySQL on the backend, and then to Node.js and diving deeper
                                    into Javascript beyond the browser. For the past year I've built several projects using React and the MERN stack, getting
                                    comfortable with tools like webpack and utilizing better coding practices with es6 like promises and class modules. I see 
                                    myself as a highly flexible developer, I'm always game to learn something new and strive to make every project better
                                    than the last.
                                    <br/><br/>
                                    As for myself sans web dev, I like to cycle and hike here in Santa Cruz, CA. I'm passionate about music and television, 
                                    and am always looking forward to play whatever next video game is on my list. Also love to read whenever I get the chance.
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
                        </div>
                        <img src={require(`../../assets/contact-background-2.jpg`)} alt="Contact Background 2" className="contact-col_background-image" onLoad={this.handleLoad.bind(this)}/>
                    </div>
                    <div className="contact-options">
                        <p className="contact-options_text">For any inquiries, please contact me at:</p>
                        <a href="mailto:cohandy@gmail.com" className="contact-button">
                            <span className="contact-button_text">cohandy@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBlock;