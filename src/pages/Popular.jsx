import React from 'react'
import { FaStar } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import '../css/Product.css'   
import { removePopular } from '../redux/appSlice'

function Popular() {


    const dispatch = useDispatch()
    const { populars } = useSelector(store => store.app)

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"4rem"}}>
      <div>
        <h1>Favorites Products</h1>
      </div>
        <div style={{display:"flex", flexWrap:"wrap", gap:"3rem", justifyContent:"center"}}>
            {populars && populars.map(item => (
                <div className="product-card" key={item.id}>

                    <div className="product-image">
                        <img src={item.image} alt={item.category} />
                    </div>

                    <div className="product-body">
                        <h3 className="product-title">{item.category}</h3>

                        <div className="product-info">
                            <span className="product-price">{item.price}₺</span>

                            
                            <span className="product-rate">
                                <FaStar /> Popular
                            </span>
                        </div>

                        <div className="product-actions">
                            <FaRegHeart onClick={()=> dispatch(removePopular(item.id))} className="heart-icon" />
                            <span className="basket-link">Popüler</span>
                        </div>
                    </div>

                </div>
            ))}
        </div>
        </div>
    )
}

export default Popular

