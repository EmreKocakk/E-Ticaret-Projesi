import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import '../css/Tech.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addBasket, addToPopular } from '../redux/appSlice';

function Man() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  const [man, setMan] = useState([])
  const [heart, setHeart] = useState(false)

  const addToBasket = (item) => {
    const payload = {
      id: item.id,
      category: item.category,
      price: item.price,
      image: item.image,
      title: item.title
    }
    dispatch(addBasket(payload))
  }

  const addPopular = (item) => {
    const payload = {
      id: item.id,
      category: item.category,
      price: item.price,
      image: item.image,
      title: item.title
    }
    dispatch(addToPopular(payload))
    setHeart(!heart)
  }

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProduct(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])


  const addMan = () => {
    if (product.length > 0) {
      setMan(product.filter(item => item.category === "men's clothing"))
    }
  }

  useEffect(() => {
    addMan()
  }, [product])


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"4rem"}}>
      <div>
        <h1>Man Products</h1>
      </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center", alignItems: "center" }}>
      {
        man && man.map(item => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt={item.category} />
            </div>

            <div className="product-body">
              <h3 className="product-title">{item.category}</h3>

              <div className="product-info">
                <span className="product-price">{item.price}₺</span>
                <button onClick={() => navigate("/product-details/" + item.id)} className='tech-detail-btn'>Detayına git</button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FaRegHeart onClick={() => addPopular(item)} className='heart-icon' />
                <Link onClick={() => addToBasket(item)} className='tech-basket-btn'>Sepete Ekle</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Man