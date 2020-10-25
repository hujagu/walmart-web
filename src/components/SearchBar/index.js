import React from 'react';
import SearchBox from '../SearchBox';
import ProductList from '../ProductList';
import Logo from '../Logo'
import './searchBar.css';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: undefined
        };
        this.getData = this.getData.bind(this);
    }

    getData = async (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        const getData = await fetch(`https://walmart-service.herokuapp.com/products?search=${search}`);
        //const getData = await fetch(`http://localhost:5000/products?search=${search}`);
        const data = await getData.json();

        this.setState({
            products: data
        });
    }

    render() {
        return <div className="wrapper">
            <header className="site-header">
                <div className="container">
                    <Logo />
                    <SearchBox getData={this.getData} />
                </div>
            </header>
            <ProductList products={this.state.products} />
        </div>
    }
}

export default SearchBar;