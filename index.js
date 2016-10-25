import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Marked extends Component {
    constructor(props) {
        super(props);
        
        var textArea = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
    
        this.state = {
            text: textArea
        };
    }

    updateMarked(text) {
        this.setState({text: text});
    }

    convertToHTML(text) {
        var textHTML = marked(text, {sanitize: true});
        var markupHTML = {
          __html: textHTML
        };
        return markupHTML;
    }

    render() {
        return (
          <div className="row">
            <div className="col-md-6">
                <textarea 
                    className="form-control" 
                    rows="30" 
                    onChange={event => this.updateMarked(event.target.value)}
                    value={this.state.text}>
                </textarea>
            </div>
            <div className="col-md-6">
                <div dangerouslySetInnerHTML={this.convertToHTML(this.state.text)}></div>
            </div>
          </div>
        );
    }
}

ReactDOM.render(<Marked />, document.getElementById("inputMarked"));