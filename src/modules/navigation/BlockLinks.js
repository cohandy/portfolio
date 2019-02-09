import React from 'react';

class BlockLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        this.setState({
            active: true
        });
    }

    render() {
        //find active block, to apply specific styling
        let currentBlock = this.props.blocks[this.props.activeBlockIndex];
        let blockStyle = {
            color: currentBlock.navColor
        }
        let blockClasses = ["l-block-links"];
        if(this.state.active) {
            blockClasses.push("is-active");
        }
        return (
            <aside className={blockClasses.join(" ")} style={blockStyle}>
                {
                    this.props.blocks.map((block, index) => {
                        let underlineStyle = {
                            backgroundColor: currentBlock.navColor
                        }
                        return (
                            <div
                                className={block.active ? "block-link is-active" : "block-link"}
                                key={`nav-block-${index}`}
                                onClick={() => this.props.toNextBlock(index, null)}
                            >
                                <span className="block-link_title">
                                    {block.name}
                                    <div className="block-link_title_underline" style={underlineStyle}></div>
                                </span>
                            </div>
                        )
                    })
                }
            </aside>
        )
    }
}

export default BlockLinks;