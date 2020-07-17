import React, {Component} from 'react';
import {Table} from "react-bootstrap/cjs";

class ProductList extends Component {
    render() {
        let {products} = this.props
        console.log(products)
        let product = products.map((product, index)=> {
            return <tr>
                <td>{index+1}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
            </tr>
        })
        return (
            <div style={{marginTop: 10}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductList;
