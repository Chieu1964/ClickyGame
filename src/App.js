import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";

class App extends Component {
  // Setting this.state.dogs to the dogs json array
  state = {
    dogs,
    score: 0,
    highscore: 0
  };

  removeDog = id => {
    // Filter this.state.dogs for dogs with an id not equal to the id being removed
    const dogs = this.state.dogs.filter(dog => dog.id !== id);
    // Set this.state.dogs equal to the new dogs array
    this.setState({ dogs });
  };

  // Map over this.state.dogs and render a DogCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Test Your Memory</Title>
        {this.state.dogs.map(dog => (
          <DogCard
            removeDog={this.removeDog}
            id={dog.id}
            key={dog.image}
            
            image={dog.image}

          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
