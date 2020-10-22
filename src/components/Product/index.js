import React from 'react';
import ProductDetails from '../ProductDetails'
import ProductImage from '../ProductImage'

import './product.css'

class Product extends React.Component {

    render() {
        const { product } = this.props;

        return <div className="box-product">
            <ProductImage image={product.image} />
            <div className="responsive-holder-xs">
                <ProductDetails details={product.details} />
                <div className="product-action">
                    <div className="product-addtocart">
                        <button type="button" className="btn btn-info btn-block btn-agregar js-btn-agregar">
                            Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Product;