import React from 'react';
import ProductList from '../ProductList'
import SearchBar from '../SearchBar';
import './container.css'

class Container extends React.Component {
	render() {
		return <div className="wrapper">
		<SearchBar />
		<ProductList />
	</div>
	}
}

export default Container;