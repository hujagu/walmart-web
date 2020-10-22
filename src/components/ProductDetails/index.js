import React from 'react';
import './productDetails.css'

class ProductDetails extends React.Component {

    render() {
        const { details } = this.props;

        return <div className="product-details">
            <a href="#" className="product-link">
                <span className="product-name">{details.product_name}</span>
                <span className="product-description js-ellipsis"><b>{details.product_description}</b></span>
            </a>
            <div className="product-price">
                <span className="product-attribute"><b>{details.price.product_attribute}</b></span>
                <span className="price-sell"><b>{details.price.price_sell}</b></span>
                <span className="product-round">{details.price.product_round}</span>
            </div>
        </div>
    }
}

export default ProductDetails;