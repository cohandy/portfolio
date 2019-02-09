import React from 'react';

class HelloText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: [
                {
                    text: "",
                    active: true,
                    blinking: false,
                    pauseOnLast: false
                },
                {
                    text: "",
                    active: false,
                    blinking: false,
                    pauseOnLast: true
                },
                {
                    text: "",
                    active: false,
                    blinking: false,
                    pauseOnLast: false
                },
                {
                    text: "",
                    active: false,
                    blinking: false,
                    pauseOnLast: false
                }
            ],
            started: false
        }
        this.fullGreeting = [
            "Hi!",
            "I'm Connor,",
            "a fullstack",
            "web developer."
        ];
        this.adjectives = [
            "fullstack",
            "React",
            "responsive",
            "Node.js",
            "modern"
        ];
    }

    componentDidUpdate() {
        if(!this.props.loading && !this.state.started) {
            setTimeout(() => {
                this.typeGreeting(0, 0);
            }, 1000);
            this.setState({
                started: true
            });
        }
    }

    typeGreeting(arrIndex, textIndex) {
        let nextGreetingState = this.state.greeting;
        //add next letter to word being typed out
        nextGreetingState[arrIndex].text = this.fullGreeting[arrIndex].substring(0, textIndex);
        nextGreetingState = nextGreetingState.map((row, index) => {
            //check if row is being typed out
            if(index !== arrIndex) {
                row.active = false;
            } else row.active = true;
            //check if row is on the last letter
            if (textIndex + 1 > this.fullGreeting[arrIndex].length) {
                row.blinking = true;
            } else row.blinking = false;
            return row;
        });
        this.setState({
            greeting: nextGreetingState
        });
        let nextArrIndex = arrIndex,
            nextTextIndex = textIndex;
        //determine if done
        if(arrIndex === this.state.greeting.length - 1 && textIndex + 1 > this.fullGreeting[arrIndex].length) {
            setTimeout(() => {
                nextGreetingState[2] = { ...nextGreetingState[2], active: true, blinking: true };
                nextGreetingState[nextGreetingState.length - 1] = { ...nextGreetingState[nextGreetingState.length - 1], active: false, blinking: false }
                this.setState({
                    greeting: nextGreetingState
                });
            }, 2000);
            setTimeout(() => {
                this.deleteAdjective(0, this.adjectives[0].length);
            }, 2500);
        } else {
            //switch to next row or next text index
            let timeoutMs = 125;
            if(textIndex + 1 > this.fullGreeting[arrIndex].length) {
                nextArrIndex += 1;
                nextTextIndex = 0;
                timeoutMs = 150;
            } else {
                nextTextIndex += 1;
            }
            if(nextGreetingState[arrIndex].blinking && nextGreetingState[arrIndex].pauseOnLast) {
                timeoutMs = 1550;
            }
            setTimeout(() => {
                this.typeGreeting(nextArrIndex, nextTextIndex);
            }, timeoutMs);
        }
    }

    changeAdjective(arrIndex, textIndex) {
        //add next letter
        let nextGreetingState = this.state.greeting;
        nextGreetingState[2].text = `a ${this.adjectives[arrIndex].substring(0, textIndex)}`
        this.setState({
            greeting: nextGreetingState
        });
        let nextArrIndex = arrIndex,
            nextTextIndex = textIndex;
        //switch to next row or next text index
        if(textIndex + 1 > this.adjectives[arrIndex].length) {
            nextGreetingState[2].blinking = true;
            setTimeout(() => {
                this.deleteAdjective(arrIndex, this.adjectives[arrIndex].length);
            }, 3500);
        } else {
            nextGreetingState[2].blinking = false;
            nextTextIndex += 1;
            setTimeout(() => {
                this.changeAdjective(nextArrIndex, nextTextIndex);
            }, 125);
        }
        this.setState({
            greeting: nextGreetingState
        });
    }

    deleteAdjective(arrIndex, textIndex) {
        //remove letter
        let nextGreetingState = this.state.greeting;
        nextGreetingState[2].text = `a ${this.adjectives[arrIndex].substring(0, textIndex)}`;
        nextGreetingState[2].blinking = false;
        this.setState({
            greeting: nextGreetingState
        });
        if(textIndex - 1 < 0) {
            this.changeAdjective(arrIndex === this.adjectives.length - 1 ? 0 : arrIndex + 1, 0);
        } else {
            setTimeout(() => {
                this.deleteAdjective(arrIndex, textIndex - 1);
            }, 70);
        }
    }

    render() {
        return (
            <div className="hello-text">
                {
                    this.state.greeting.map((row, index) => {
                        let rowClasses = ['hello-text_row'];
                        if(row.active) {
                            rowClasses.push('is-active');
                        }
                        if(row.blinking) {
                            rowClasses.push('is-blinking');
                        }
                        return (
                            <div 
                                className={rowClasses.join(' ')}
                                key={`hello-text-row-${index}`}
                            >
                                {row.text}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default HelloText;