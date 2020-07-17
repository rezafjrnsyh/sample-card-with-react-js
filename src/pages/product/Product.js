import React, {Component} from 'react';
import ProductModel, {getProducts} from "../../api/api-product/Api-Product";
import ProductList from "./ProductList";
import {Button} from "react-bootstrap/cjs";

class Product extends Component {
    state = {
        products: [],
        sample: ""
    }

    componentDidMount() {
        getProducts().then((products)=>{
            this.setState({...this.state, products: products.data})
        }).catch((error)=>{
            console.error(error)
        })
    }

    render() {
        return (
            <div>
                <Button style={{display: `flex`, marginTop: 10, borderRadius: 10}} className='primary'>Add Product</Button>
                <ProductList sample={this.state.sample} products={this.state.products}/>
            </div>
        );
    }
}

export default Product;
