import React from 'react';

import './searchBox.css';

class SearchBox extends React.Component {
    render() {
        return <div id="searchBox" className="search-box">
            <form action="#" id="searchBoxForm" method="GET" className="form-new search-form">
            <input type="text" name="Ntt" placeholder="¿Qué producto buscas hoy?" id="searchtextinput" autocomplete="off" className="form-control search-input" />
                <button type="button" id="searchsubmitbutton" className="search-btn">
                    
                </button>
            </form>
        </div>
    }
}

export default SearchBox;