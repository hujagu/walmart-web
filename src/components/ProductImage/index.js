import React from 'react';
import './productImage.css'

class ProductImage extends React.Component {

    render() {
        const { image } = this.props;

        return <div className="responsive-holder-xs">
            <div className="product-image">
                <a href="#" className="product-link">
                    <div className="photo-container">
                        <img src={image.src} alt={image.alt} title={image.title} className="img-responsive lazyloaded" />
                    </div>
                </a>
            </div>
            <span className="reference-code"><b>{image.reference_code}</b></span>
        </div>
    }
}

export default ProductImage;