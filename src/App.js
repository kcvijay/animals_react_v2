import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Animals from "./Components/Animals";
import Birds from "./Components/Birds";
import About from "./Components/About";
import Card from "./Components/Card";
import PageNotFound from "./Components/PageNotFound";
import { Animal, Bird } from "./Animal-list";
import "./App.css";

class App extends Component {
  state = {
    animals: Animal, // From list
    birds: Bird, // From list
    likes: 0,
    value: "",
  };

  searchHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // Adding likes for both animals and birds through different vars. Mapping through animals/birds, searching exact item by name, opening that specific element by ... and adding likes. Setting updated list at the end.
  addLikes = (name) => {
    this.setState((state) => {
      const updatedArrayAnimal = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      const updatedArrayBird = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return {
        animals: updatedArrayAnimal,
        birds: updatedArrayBird,
      };
    });
  };

  // Removing likes for both animals and birds through different vars. Mapping through animals/birds, searching exact item by name, opening that specific element by ... and removing likes. Setting updated list at the end.
  removeLikes = (name) => {
    this.setState((state) => {
      const updatedArrayAnimal = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      const updatedArrayBird = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes - 1 };
        } else {
          return bird;
        }
      });
      return {
        animals: updatedArrayAnimal,
        birds: updatedArrayBird,
      };
    });
  };

  // By removing, filtering and posting the cards who are not similar to the specific removing one / Every other than that specific one.
  removeCard = (name) => {
    const updatedArrayAnimal = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    const updatedArrayBird = this.state.birds.filter(
      (bird) => bird.name !== name
    );
    this.setState({ animals: updatedArrayAnimal, birds: updatedArrayBird });
  };

  render() {
    // Purposed for filtering the card by name. Posts only cards those include the value of state, while searching.
    const animalsFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.value);
    });
    // Purposed for filtering the card by name. Posts only cards those include the value of state, while searching.
    const birdsFilter = this.state.birds.filter((bird) => {
      return bird.name.includes(this.state.value);
    });

    //Mapping the filtered list from above.
    const AnimalList = animalsFilter.map((Animal) => (
      <Card
        key={Animal.name}
        name={Animal.name}
        likes={Animal.likes}
        dislikes={Animal.likes < 0}
        addLikes={() => this.addLikes(Animal.name)}
        removeLikes={() => this.removeLikes(Animal.name)}
        removeCard={() => this.removeCard(Animal.name)}
      />
    ));
    const birdList = birdsFilter.map((Bird) => (
      <Card
        key={Bird.name}
        name={Bird.name}
        likes={Bird.likes}
        dislikes={Bird.likes < 0}
        addLikes={() => this.addLikes(Bird.name)}
        removeLikes={() => this.removeLikes(Bird.name)}
        removeCard={() => this.removeCard(Bird.name)}
      />
    ));
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <section className="app-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/animals"
                element={
                  <Animals
                    searchHandler={this.searchHandler}
                    values={this.state.value}
                    animalList={AnimalList}
                  />
                }
              ></Route>

              <Route
                path="/birds"
                element={
                  <Birds
                    searchHandler={this.searchHandler}
                    values={this.state.value}
                    birdList={birdList}
                  ></Birds>
                }
              ></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
