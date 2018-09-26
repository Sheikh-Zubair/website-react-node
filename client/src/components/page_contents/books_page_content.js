import React, { Component } from 'react';
import { fetchAuthors } from '../../actions/index';
import { connect } from 'react-redux';

class BooksContent extends Component {
    componentWillMount() {
        this.props.fetchAuthors();
    }
    
    onClick(event) {
        
        if (this.props.user === null || this.props.user === 0){
            document.querySelector(`#a${event.target.id}`).innerHTML = 'Sign in required!';
        }else if(this.props.user){
            document.querySelector(`#a${event.target.id}a`).innerHTML = `Logged in as ${this.props.user.name}`;
        }
    }
    onBlur(event) {
        document.querySelector(`#a${event.target.id}`).innerHTML = '';
        document.querySelector(`#a${event.target.id}a`).innerHTML = '';
    }
    bookList() {
        return this.props.authors.map( author => {
            return author.books.map((book, n) => {
                return(
                    <li className="list-group-item" key={author._id+n}>
                    <div>{book}</div>
                    <div className="text-right"><div className="btn btn-warning" id={author._id+n} onMouseOver={this.onClick.bind(this)}
                        onMouseOut={this.onBlur}>Download</div>
                        <div className="text-danger" id={`a${author._id+n}`}></div>
                        <div className="text-success" id={`a${author._id+n}a`}></div>
                    </div>
                </li>
                );
            });
        });
    }

    render() {
        return (
            <div className="container-fluid">
            <h3>Books</h3>
                <ul className="list-group">
                    {this.bookList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authors: state.authors,
        user: state.user
    }
}
export default connect(mapStateToProps, {fetchAuthors})(BooksContent);