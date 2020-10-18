import React, { Component } from 'react';
import './App.css';
import CardList from '../card-list/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.fetchUsers().then(users => {
      this.setState({ robots: users });
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(r => {
      return r.json();
    })
  }


  render() {
    const filteredRobots = this.state.robots.filter(r =>
      r.name.toLowerCase().includes(
        this.state.searchfield.toLowerCase()));
    return (
      <div className="tc" style={{ overflowY: 'hidden' }} >
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}></CardList>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
