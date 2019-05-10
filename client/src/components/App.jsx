import React from 'react';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';
import $ from 'jquery';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        repos: []
      }
      
      this.search = this.search.bind(this);
    }
  
    search (term) {
      console.log(`${term} was searched`);

      $.post('/repos', {username: term})
      .done(response => {
          console.log(response);
      })
      .fail(error => {
          console.log(error);
      })
      
    }
  
    render () {
      return (<div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos}/>
        <Search onSearch={this.search}/>
      </div>)
    }
  }


  export default App;