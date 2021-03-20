import React, { Component, useState, useEffect } from 'react';
import './App.css';
import CardList from '../card-list/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {

  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  // componentDidMount() {
  //   this.fetchUsers().then(users => {
  //     this.setState({ robots: users });
  //   })
  // }

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(r => {
      return r.json();
    })
  }

  useEffect(()=>{
    console.log('FETCH');
    fetchUsers().then(response => setRobots(response));
  },[]);
    const filteredRobots = robots.filter(r =>
      r.name.toLowerCase().includes(
        searchField.toLowerCase()));
    return (
      <div className="tc" style={{ overflowY: 'hidden' }} >
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}></CardList>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default App;
