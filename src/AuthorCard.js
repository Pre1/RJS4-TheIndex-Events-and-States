import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    const selectAuthor = this.props.selectAuthor;

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={author.imageUrl}
              alt={authorName}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{authorName}</span>
            </h5>
            <small className="card-text">{author.books.length} books</small>

            <br />
            <footer className="footer">
              <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => selectAuthor(author)}>
                Test
              </button>
            </footer>

          </div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;