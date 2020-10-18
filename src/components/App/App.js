import React, { Component } from 'react';
import './App.css';
import CardList from '../card-list/CardList';
import { robots } from '../../models/robots';
import SearchBox from '../SearchBox/SearchBox';

const state = {
  robots,
  searchfield: ''
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const filteredRobots = this.state.robots.filter(r =>
      r.name.toLowerCase().includes(
        this.state.searchfield.toLowerCase()));
    return (
      <div className="tc" >
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;
