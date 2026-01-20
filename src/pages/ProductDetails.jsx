import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../css/ProductDetails.css'
import { useDispatch } from 'react-redux'
import { addBasket } from '../redux/appSlice';



function ProductDetails() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  const getProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setData(res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const { title, price, description, image, category } = data

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

  return (
    <div className="product-details">
      <div className="details-card">
        <div className="details-image">
          <img src={image} alt={title} />
        </div>

        <div className="details-content">
          <h2 className="details-title">{title}</h2>
          <p className="details-description">{description}</p>

          <div className="details-bottom">
            <span className="details-price">{price}₺</span>
            <Link onClick={addToBasket} className="add-basket-btn">
              Sepete Ekle
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails