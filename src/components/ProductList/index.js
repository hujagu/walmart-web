import React from 'react';
import Product from '../Product'
import './productList.css'

class ProductList extends React.Component {

  render() {
    const { products } = this.props;
    if(!products) return null
    return <div className="table-cell">
      {products.map(element => (
        <Product key={element._id} product={element} />
      ))}

    </div>
  }
}

export default ProductList;