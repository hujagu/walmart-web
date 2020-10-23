import React from 'react';
import SearchBox from '../SearchBox';
import Logo from '../Logo'
import './searchBar.css';


class SearchBar extends React.Component {
    render() {
        return <header className="site-header">
            <div className="container">
                <Logo />
                <SearchBox />
            </div>
        </header>
    }
}

export default SearchBar;