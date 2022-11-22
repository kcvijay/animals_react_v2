import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Animals from "./Components/Animals";
import Birds from "./Components/Birds";
import About from "./Components/About";
import Card from "./Components/Card";
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
    const animalsFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.value);
    });
    const birdsFilter = this.state.birds.filter((bird) => {
      return bird.name.includes(this.state.value);
    });
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
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
