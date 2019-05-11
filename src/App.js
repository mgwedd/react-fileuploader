import React, { Component } from 'react';
import FilterableList from './FilterableList/FilterableList'; 
import SearchBar from './SearchBar/SearchBar';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}
          handleUpdate={term => this.updateSearchTerm(term)} 
          handleFilterChange={option => this.updateFilterOption(option)} />
         <FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption} />
      </div>
    );
  }
}
