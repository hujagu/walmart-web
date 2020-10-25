import React from 'react';
import { BsSearch } from 'react-icons/bs'
import './searchBox.css';

class SearchBox extends React.Component {
    render() {
        return <div id="searchBox" className="search-box">
            <form action="#" id="searchBoxForm" onSubmit={this.props.getData} method="GET" className="form-new search-form">
                <input type="text" name="search" placeholder="¿Qué producto buscas hoy?" id="searchtextinput" autoComplete="off" className="form-control search-input" />
                <button type="submit" id="searchsubmitbutton" className="search-btn">
                    <BsSearch />
                </button>
            </form>
        </div>
    }
}

export default SearchBox;