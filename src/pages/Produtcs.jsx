import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/appSlice'
import '../css/Products.css'



function Produtcs() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    const { products } = useSelector((store) => store.app)


    return (
        <div className='product-list'>
            <div>
                <h1>Products</h1>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", gap:"3rem", alignItems:"center", justifyContent:"center"}}>
                {
                    products && products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>

        </div>
    )
}

export default Produtcs