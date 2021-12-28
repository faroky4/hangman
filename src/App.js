import './App.css'
import React, { Component } from 'react';

import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super();
    let letterStatus = this.generateLetterStatuses();
    this.state = { 
      score: 200,
      letterStatus: letterStatus,
      word: 'FAROK' ,
      finished:false
    };
  }
  
  solution = () => {
    let completeWord = '';
    for (let letter of this.state.word) {
      if (this.state.letterStatus[letter] === true) {
        completeWord += letter;
      } else {
        completeWord += ' _ ';
      }
    }
    if(!completeWord.charAt("_")){
      this.setState({finished:true});
    }
    return completeWord;
  };

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  clickedLetter = (letter) => {
    let changeLetterStatus = { ...this.state.letterStatus };

    if (this.state.word.includes(letter)) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.setState({ score: this.state.score - 20 });
    }

    changeLetterStatus[letter] = true;
    this.setState({ letterStatus: changeLetterStatus });
  };

  render() {
    return this.state.score > 0 ? (
      <div>
        <Score key={this.state.score} score={this.state.score} />
        <Solution key={this.solution} solution={this.solution} />
        <Letters
          key={this.state.letterStatus}
          letterStatus={this.state.letterStatus}
          clickedLetter={this.clickedLetter}/>
      </div>
      ) : (
        <div> game over </div>
      )
  }

}

export default App;