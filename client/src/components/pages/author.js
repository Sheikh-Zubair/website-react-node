import React, { Component } from 'react';
import AuthorsContent from '../page_contents/authors_page_content';
export default class BookPage extends Component {
    render() {
        return (
                <div className="container" >
                    <AuthorsContent />
                </div> 
        );
    }
}