import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchText };
    });
  };

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    var filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchText);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="search monsters..."
          onChangeHandler={onSearchChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
