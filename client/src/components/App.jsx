import React from 'react';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        repos: []
      }
  
    }
  
    search (term) {
      console.log(`${term} was searched`);
      // TODO
    }
  
    render () {
      return (<div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos}/>
        <Search onSearch={this.search.bind(this)}/>
      </div>)
    }
  }


  export default App;