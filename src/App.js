import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuth: authors
  }

  selectAuthor = author => {
    this.setState({ currentAuthor: author })
  }

  resetAuth = () => {
    this.setState({
      currentAuthor: null,
      filteredAuth: authors
   })
  }

  filterAuthors = query => {
    
     if (query === "") {
      console.log("the query is empty: ", query)
      return this.setState({ filteredAuth: authors})
    }

    const filtered = authors.filter( (auth) => {

      const name = (auth.first_name + " " +auth.last_name).toLowerCase();      
      console.log("filterAuthors => full name q: ", name)
      
      return name.includes(query.toLowerCase())
    })

    console.log("filterAuthor LIST => : ", filtered)
    this.setState({ filteredAuth: filtered})
  }

  render() {
    const authorDetail = <AuthorDetail 
                          selectedAuth = {this.state.currentAuthor} />

    const authorsList = <AuthorsList 
                        authors = {this.state.filteredAuth}
                        selectAuthor = {this.selectAuthor}
                        filteredAuthors = {this.filterAuthors}/>

    console.log("this.state", this.state)
    console.log("this.state.currentAuthor", this.state.currentAuthor)

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            
            <Sidebar resetAuth = {this.resetAuth} />

          </div>
          

          <div className="content col-10">
            
            {this.state.currentAuthor ? authorDetail : authorsList }

          </div>

        </div>
      </div>
    );
  }
}

export default App;
