import React, { Component } from 'react';
import Header from './components/Header';
import data from './data';
import Reference from './components/Reference';

class App extends Component {
  state = {
    data,
    q: ""
  }
  render() {
    console.log(data)
    return (
      <div>
        <Header />
        <Reference items={this.state.data}/>

      </div>
    )
  }

}

export default App
