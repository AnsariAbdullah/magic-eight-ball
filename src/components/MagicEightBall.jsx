import React from 'react';
import '../styles/magic-eight-ball.css';

const inputStyle = {
    width: 235,
    margin: 5
}
  
class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInput: '',
            randomIndex: ''
        }
        
        this.ask = this.ask.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt', 
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it', 
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        
        const answer = possibleAnswers[this.state.randomIndex]

        return (
            <div className="game-wrapper">
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                        style={inputStyle}
                    />
                </div>

                <div className="button-wrapper">
                    <button onClick={this.ask}> Ask the Magic Eight Ball!</button>
                </div>

                <div className="answer-wrapper">
                    <h3>Answer:</h3>
                    <p className="answer">
                        {answer}
                    </p>
                </div>
            </div>
        );
    }
};

export default MagicEightBall;





// Desc: The Magic 8 Ball is a toy used for fortune-telling or seeking advice, developed in the 1950s and manufactured by Mattel. The user asks a yes-or-no question to the large plastic ball, then turns it over to reveal a written answer which appears on the surface of the toy. The Magic 8-Ball is styled after a Billiards ball. 