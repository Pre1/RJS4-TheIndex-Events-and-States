import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard 
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor= {this.props.selectAuthor} />
    ));

    return (

      <div className="authors">
        <h3>Authors</h3>
        <SearchBar filteredAuthors = {this.props.filteredAuthors}/>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
