
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';
class App extends Component{

  constructor(){
    super();

    this.state = {
        users: [],
        searchField: ''
    };
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://retoolapi.dev/Fpos5w/data')
      .then(response => response.json())
      .then(users => this.setState({users: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render(){
    const {users, searchField} = this.state;
    
    // checks the api consists of user with the name
    const filteredUsers = users.filter( user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
        <h1>Our Customers</h1>

        {/* Search field */}
        <SearchBox 
          placeholder='Search User'
          handleChange={this.handleChange}
          />
          
        {/* Monster Cards */}
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}

export default App;
