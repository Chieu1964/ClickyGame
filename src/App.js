import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dogs from "./dogs.json";
import "./App.css"

// Random shuffle
function randomDogs(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.dogs to the dogs json array
  state = {
    dogs,
    currentScore: 0,
    topScore: 0,
    comment: "",
    clicked: [],
  };


  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      comment: "Woof! You're awesome!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 6) {
      this.setState({ comment: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      comment: "Gruh! You could do it better!",
      clicked: []
    });
    this.handleShuffle();
  };
  handleShuffle = () => {
    let shuffledDogs = randomDogs(dogs);
    this.setState({ dogs: shuffledDogs });
  };

  // Map over this.state.dogs and render a DogCard component for each friend object

  render() {
    return (
      <Wrapper>
        
        <Header
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          comment={this.state.comment}
        />
        <Title><h4>
        Click on every dog once. Once you click a dog the grid will shuffle.
        <br/>Try not to click the same dog twice or the game will be over!
          </h4></Title>
        {this.state.dogs.map(dog => (
          <DogCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={dog.id}
            key={dog.id}
            image={dog.image}
          />
        ))}
      </Wrapper>
    );
  }

}


export default App;
