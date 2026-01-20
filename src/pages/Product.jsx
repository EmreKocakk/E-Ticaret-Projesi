import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Product.css'
import {useDispatch, useSelector} from 'react-redux'
import { addBasket, addToPopular, removePopular } from '../redux/appSlice';


function Product({ product }) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id, title, price, description, category, image, rating: { rate } } = product
    const [heart, setHeart] = useState(false)

    const addToBasket = () => {
        const payload = {
            id,
            category,
            price,
            image,
            title
        }
        dispatch(addBasket(payload))
    }


    const addPopular = () => {
        const payload = {
            id,
            category,
            price,
            image,
            title
        }
        dispatch(addToPopular(payload))
        setHeart(!heart)
    }

    return (
        
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={category} />
            </div>

            <div className="product-body">
                <h3 className="product-title">{category}</h3>

                <div className="product-info">
                    <span className="product-price">{price}₺</span>
                    <span className="product-rate">
                        <FaStar /> {rate}
                    </span>
                    <button
                        className="detail-btn"
                        onClick={() => navigate(`/product-details/${id}`)}
                    >
                        Detayına Git
                    </button>
                </div>

                <div className="product-actions">
                    {
                        heart ? <FaRegHeart onClick={()=> dispatch(removePopular(id))} className="heart-icon" style={{color:"red"}} />  : <FaRegHeart onClick={addPopular} className="heart-icon" />
                    }
                    
                    
                    <Link onClick={addToBasket} className="basket-link">
                        Sepete Ekle
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product