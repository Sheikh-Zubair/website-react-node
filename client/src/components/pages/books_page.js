import React, { Component } from 'react';

import BooksContent from '../page_contents/books_page_content';
export default class BookPage extends Component {
    render() {
        return (
                <div className="container" style={{height: "400px"}}>
                    <BooksContent />
                </div>
        );
    }
}