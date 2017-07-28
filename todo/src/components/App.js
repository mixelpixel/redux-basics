import React from 'react'
// import React, { Component } from 'react'; // <--- don't need cuz here App is function, not class extending component
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import logo from '../art/logo.svg';
import '../css/App.css';

const App = () => (
  <div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
