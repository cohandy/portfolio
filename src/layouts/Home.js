import React from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

import HelloBlock from '../modules/hello/HelloBlock.js';
import ProjectBlock from '../modules/project/ProjectBlock.js';
import ContactBlock from '../modules/contact/ContactBlock.js';
import Navbar from '../modules/navigation/Navbar.js';
import BlockLinks from '../modules/navigation/BlockLinks.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [
                {
                    name: "HELLO",
                    active: true,
                    navColor: "#FFFFFF",
                    project: false
                },
                {
                    name: "MOBX",
                    active: false,
                    navColor: "#111111",
                    project: true,
                    details: {
                        backgroundImage: "chart-background-3.png",
                        backgroundImageStyles: {
                            opacity: 0.1
                        },
                        backgroundColor: "#FFFFFF",
                        textStyles: {
                            color: "#111111"
                        },
                        video: "crypto-trader-demo.mp4",
                        title: "CryptoTrader",
                        features: ["React", "MobX", "React Router V4", "CryptoCompare API"],
                        website: "https://crypto-trader-app.herokuapp.com/",
                        code: "https://bitbucket.org/cohandy/crypto-trader",
                        description: `
                            My most recent React project. Pulls in data from CryptoCompare, a popular cryptocurrency data API, and let's the user 
                            record trades and sort currencies. Uses MobX to handle state management and the latest version of React Router for 
                            client side routing. Has a responsive search and uses localstorage to store trades. Design is modeled after tradingview.com.
                        `
                    }
                },
                {
                    name: "REACT",
                    active: false,
                    navColor: "#FFFFFF",
                    project: true,
                    details: {
                        backgroundImage: "lexical-background.jpeg",
                        backgroundImageStyles: {
                            opacity: 0.05
                        },
                        backgroundColor: "#353535",
                        textStyles: {
                            color: "#FFFFFF"
                        },
                        video: "lexical-pursuit-demo.mp4",
                        title: "Lexical Pursuit",
                        features: ["React", "React Router V4", "create-react-app"],
                        website: "https://lexicalpursuit.herokuapp.com",
                        code: "https://bitbucket.org/cohandy/react-word-game",
                        description: `
                            Pure React project emulating the classic game Boggle. I made almost this exact project years ago in vanilla js and thought it would make 
                            great React practice, and it was! Not having to traverse the DOM to find legal moves and instead check an array containing the letter tile
                            objects made it more fun and less of a headache.
                        `
                    }
                },
                {
                    name: "NODE",
                    active: false,
                    navColor: "#FFFFFF",
                    project: true,
                    details: {
                        backgroundImage: "chart-background-1.jpeg",
                        backgroundImageStyles: {
                            opacity: 0.2
                        },
                        backgroundColor: "#111111",
                        textStyles: {
                            color: "#FFFFFF"
                        },
                        video: "crypto-bot-demo.mp4",
                        title: "Crypto Bot",
                        features: ["Node.js", "MongoDB", "Mongoose", "Bittrex API", "CryptoCompare API"],
                        website: null,
                        code: "https://bitbucket.org/cohandy/crypto-bot",
                        description: `
                            A project with many iterations. The original idea was to create an autonomous script that would execute 
                            trades on the Bittrex cryptocurrency exchange using technical analysis indicators. Lots of testing later and 
                            I ended up using a logisitic regression algorithm from a machine learning library to determine buy/sell signals. 
                            Built in Node and using MongoDB to store trade data, the project is driven by a promise chain that utilizes class modules 
                            to perform actions. 
                        `
                    }
                },
                {
                    name: "REDUX",
                    active: false,
                    navColor: "#111111",
                    project: true,
                    details: {
                        backgroundImage: "airport-background.jpg",
                        backgroundImageStyles: {
                            opacity:0.5
                        },
                        backgroundColor: "#FFFFFF",
                        textStyles: {
                            color:"#111111"
                        },
                        video: "famished-flyer-demo.mp4",
                        title: "Airport App",
                        features: ["React", "Redux", "Express", "MongoDB", "Mongoose", "Yelp API", "React Router V4", "create-react-app"],
                        website: "https://famished-flyer.herokuapp.com/",
                        code: "https://bitbucket.org/cohandy/airport-app",
                        description: `
                            Utilizes a MongoDB database with most of the world's airports and the Yelp API to help you find a decent place to eat when you're
                            waiting for a flight. Uses React with Redux on the frontend, sending requests with fetch to a custom API built with Express.
                        `
                    }
                },
                {
                    name: "ABOUT",
                    active: false,
                    navColor: "#FFFFFF",
                    project: false
                }
            ],
            scrolling: false,
            homeOffsetTop: 0,
            lastTouchMovePos: 0,
            activeBlockIndex: 0
        }
    }

    componentWillMount() {
        window.addEventListener('mousewheel', this.handleMouseWheelScroll.bind(this), false);
        window.addEventListener('touchstart', (e) => {
            this.setState({
                lastTouchMovePos: e.touches[0].clientY
            });
        }, false);
        window.addEventListener('touchend', (e) => {
            this.handleMouseWheelScroll(e, e.changedTouches[0].clientY);
        }, false);
        window.addEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    componentWillUnmount() {
        window.removeEventListener('mousewheel', this.handleMouseWheelScroll.bind(this), false);
        window.removeEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    componentDidMount() {
        //update active block state on pageload, if scroll position is not on first block
        if(window.scrollY !== 0) {
            let newBlocksState = this.state.blocks,
                newActiveBlockIndex = 0;
            for(let i=0;i<newBlocksState.length;i++) {
                if(ReactDOM.findDOMNode(this[`_block${i}`]).offsetTop === window.scrollY) {
                    newBlocksState[i].active = true;
                    newActiveBlockIndex = i;
                } else {
                    newBlocksState[i].active = false;
                }
            }
            this.setState({
                blocks: newBlocksState,
                activeBlockIndex: newActiveBlockIndex
            });
        }
    }

    handleWindowResize() {
        /*
        scrollToComponent(ReactDOM.findDOMNode(this[`_block${this.state.activeBlockIndex}`]), {
            offset: 0,
            align: 'top',
            duration: 0,
            ease: 'outQuad'
        });
        */
        this.setState({
            homeOffsetTop: ReactDOM.findDOMNode(this[`_block${this.state.activeBlockIndex}`]).offsetTop + "px"
        });
    }

    handleMouseWheelScroll(e, touchMovePos) {
        let direction = "up";
        if(!touchMovePos) {
            //if deltaY is positive wheel was scrolled down
            if (e.deltaY > 0) {
                direction = "down";
            }
            if(!this.state.scrolling) this.scrollToBlock(null, direction);
        } else {
            if((touchMovePos - this.state.lastTouchMovePos) < 0) {
                direction = "down";
            }
            if(!this.state.scrolling && (touchMovePos - this.state.lastTouchMovePos) !== 0) this.scrollToBlock(null, direction);
        }
    }

    scrollToBlock(blockIndex, direction=null) {
        let nextBlockIndex = null;
        //find next block either by direction ("up" or "down") or by using passed in blockIndex
        if(direction) {
            let currentBlockIndex = null;
            for(let i=0;i<this.state.blocks.length;i++) {
                if(this.state.blocks[i].active) {
                    currentBlockIndex = i;
                    break;
                }
            }
            if(direction === "up" && currentBlockIndex > 0) {
                nextBlockIndex = currentBlockIndex - 1;
            } else if(direction === "down" && currentBlockIndex < this.state.blocks.length - 1) {
                nextBlockIndex = currentBlockIndex + 1;
            }
        } else {
            nextBlockIndex = blockIndex;
        }
        //scroll to block, set new block state
        if(nextBlockIndex || nextBlockIndex === 0) {
            this.setState({
                scrolling: true,
                homeOffsetTop: ReactDOM.findDOMNode(this[`_block${nextBlockIndex}`]).offsetTop + "px"
            });
            /*
            scrollToComponent(ReactDOM.findDOMNode(this[`_block${nextBlockIndex}`]), {
                offset: 0,
                align: 'top',
                duration: 750,
                ease: 'outQuad'
            });
            */
            setTimeout(() => {
                this.setState({scrolling: false});
            }, 1000);
            let newBlocksState = this.state.blocks,
                newActiveIndex = 0;
            for(let i=0;i<newBlocksState.length;i++) {
                if(i === nextBlockIndex) {
                    newBlocksState[i].active = true;
                    newActiveIndex = i;
                } else {
                    newBlocksState[i].active = false;
                }
            }
            this.setState({
                blocks: newBlocksState,
                activeBlockIndex: newActiveIndex
            });
        }
    }

    render() {
        let sectionStyle = {
            transform: `translate3d(0, -${this.state.homeOffsetTop}, 0)`
        }
        return (
            <div>
                <Navbar blocks={this.state.blocks} activeBlockIndex={this.state.activeBlockIndex} />
                <section className="home-section" style={sectionStyle}>
                    {
                        this.state.blocks.map((block, index) => {
                            if (index === 0) {
                                return (
                                    <HelloBlock block={block} key={`block-${index}`} ref={(el) => this[`_block${index}`] = el} toNextBlock={this.scrollToBlock.bind(this)} />
                                )
                            } else if (index === this.state.blocks.length - 1) {
                                return (
                                    <ContactBlock block={block} key={`block-${index}`} ref={(el) => this[`_block${index}`] = el} />
                                )
                            } else {
                                return (
                                    <ProjectBlock project={block} activeBlockIndex={this.state.activeBlockIndex} blockIndex={index} key={`block-${index}`} ref={(el) => this[`_block${index}`] = el} />
                                )
                            }
                        })
                    }
                </section>
                <BlockLinks blocks={this.state.blocks} toNextBlock={this.scrollToBlock.bind(this)} activeBlockIndex={this.state.activeBlockIndex} />
            </div>
        )
    }
}

export default Home;