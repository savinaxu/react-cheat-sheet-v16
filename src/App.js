import React, { Component } from 'react';
import Header from './components/Header';
import data from './data';
import Reference from './components/Reference';
import Search from './components/Search';

class App extends Component {
  state = {
    data
  }

  handleInputChange = e => {
    const { value } = e.target
    let items = data
    items = this.filterByName(value, items)
    this.setState({
      data: items
    })
  }

  filterByName = (s, arr) => {
    s = s.toLowerCase()
    return arr.filter(el => {
      let cur = el.name.toLowerCase()
      return cur.includes(s)
    })
  }


  render() {
    return (
      <div>
        <Header />
        <Search handleInputChange={this.handleInputChange}/>
        <Reference items={this.state.data}/>

      </div>
    )
  }

}

export default App
