import React from 'react';
import './productImage.css'

class ProductImage extends React.Component {

    render() {
        const { product } = this.props;

        return <div className="responsive-holder-xs">
            <div className="product-image">
                <a href="#" className="product-link">
                    <div className="photo-container">
                        <img src={`https://${product.image}`} alt={product.description} title={product.description} className="img-responsive lazyloaded" />
                    </div>
                </a>
            </div>
            <span className="reference-code"><b>{product.id}</b></span>
        </div>
    }
}

export default ProductImage;