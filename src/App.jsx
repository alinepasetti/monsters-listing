import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { monsters, searchQuery } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox placeholder="Search Monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
