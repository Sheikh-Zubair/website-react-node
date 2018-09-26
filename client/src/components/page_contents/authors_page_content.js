import React, { Component } from 'react';
import { fetchAuthors } from '../../actions/index';
import { connect } from 'react-redux';
import AuthorBooks from './author_books';

class AuthorsContent extends Component {
    componentWillMount() {
        this.props.fetchAuthors();
    }
    authorList() {
        let { authors } = this.props;
        return authors.map((author) => {
            return (
                <li className="list-group-item" key={author.id}>
                    <div>{author.name}</div>
                    <AuthorBooks books={author.books} />
                </li>
            );
        });
    }
    render() {
        
        return (
            <div className="container-fluid">
            <h3>Authors</h3>
                <ul className="list-group">
                    {this.authorList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authors: state.authors
    }
}
export default connect(mapStateToProps, { fetchAuthors })(AuthorsContent);