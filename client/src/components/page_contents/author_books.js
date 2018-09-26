import React from 'react';

export default function AuthorBooks(props) {
    return (
        <div className="text-right">
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Books
                <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                    {props.books.map((book,id)=>{
                        return <li key={id}>{book}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
