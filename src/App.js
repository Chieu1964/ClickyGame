import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";

function App() {
  return (
    <Wrapper>
      <Title>Testing Your Memory</Title>
      <DogCard
        image={dogs[0].image}
      />
      <DogCard
        image={dogs[1].image}
      />
      <DogCard
        image={dogs[2].image}
      />
    </Wrapper>
  );
}

export default App;
