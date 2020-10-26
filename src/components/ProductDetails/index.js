import React from 'react';
import './productDetails.css'

class ProductDetails extends React.Component {

    render() {
        const { product } = this.props;

        return <div className="product-details">
            <a href="#" className="product-link">
                <span className="product-name">{product.brand}</span>
                <span className="product-description js-ellipsis"><b>{product.description}</b></span>
            </a>
            <div className="product-price">
                <span className="price-sell"><b>$ {product.price} </b></span>
                <span><b>{product.discount}</b></span>
            </div>
        </div>
    }
}

export default ProductDetails;