import axios from 'axios'

export const getProducts = async function () {
    let products = await axios.get("http://localhost:3000/products")
    return products
}

export const getProductsWithPromise = new Promise((resolve, reject)=>{
    let products = axios.get("http://localhost:3000/products")
    console.log(products)
    resolve(products)
})
