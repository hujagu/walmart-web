import React from 'react';
import ProductDetails from '../ProductDetails'
import ProductImage from '../ProductImage'
import { FaShoppingCart } from 'react-icons/fa'
import './product.css'

class Product extends React.Component {

    render() {
        const { product } = this.props;
        return <div key={product._id} className="box-product">
            <ProductImage product={product} />
            <div className="responsive-holder-xs">
                <ProductDetails product={product} />
                <div className="product-action">
                    <div className="product-addtocart">
                        <button type="button" className="btn btn-info btn-block btn-agregar js-btn-agregar">
                            <FaShoppingCart />Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Product;