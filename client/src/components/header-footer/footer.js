import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue" style={{marginBottom: "10px"}}>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="/">Bookstore.com</a>
                </div>
            </footer>
        );
    }
}  