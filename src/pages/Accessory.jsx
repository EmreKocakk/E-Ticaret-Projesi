import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import '../css/Tech.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addBasket, addToPopular } from '../redux/appSlice';



function Accessory() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [accessory, setAccessory] = useState([])


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
  }

  const getProduct = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const addAccessory = () => {
    if (products.length > 0) {
      setAccessory(products.filter(item => item.category === "jewelery"))
    }
  }

  useEffect(() => {
    addAccessory()
  }, [products])

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"4rem"}}>
      <div>
        <h1>Accessory Products</h1>
      </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center", alignItems: "center" }}>
      {
        accessory && accessory.map(item => (
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
                <FaRegHeart onClick={()=> addPopular(item)} className='heart-icon' />
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

export default Accessory