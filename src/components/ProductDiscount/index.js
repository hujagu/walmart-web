import React from 'react';
import './productDiscount.css'

class ProductDetails extends React.Component {

    render() {
        const { product } = this.props;
        if(product.applyDiscount) return <span className="discount-percent"><b>{product.discount}</b></span>
        return <span></span>
    }
}

export default ProductDetails;