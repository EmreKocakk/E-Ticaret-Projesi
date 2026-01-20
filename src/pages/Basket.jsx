import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/Basket.css'
import { addBasket, removeBasket, updateBasket } from '../redux/appSlice'





function Basket() {
  const dispatch = useDispatch()
  const { basket } = useSelector(store => store.app)
  const [count, setCount] = useState(1)

    const increment = (item) => {
      setCount(count + 1)
      dispatch(addBasket(item))
    }

    const decrement = (item) => {
      if(count > 0)
      setCount(count - 1)

      dispatch(updateBasket(item))
    }


    const getTotalPrice = () => {
     return basket.reduce((sum, item) => sum + (item.quantity * item.price),0)
    }

    const getTotalItems = () => {
     return basket.reduce((sum, item) => sum + item.quantity, 0)
    }


  if (basket.length === 0) {
    return (
      <div className="empty-basket">
        <h2>Sepetiniz şu an boş</h2>
        <p>Beğendiğiniz ürünleri sepete ekleyebilirsiniz.</p>
      </div>
    )
  }

  return (
    <div className="basket-page">

      <div className="basket">
        {basket.map(item => (
          <div className="basket-item" key={item.id}>
            <div className="basket-image">
              <img src={item.image} alt={item.category} />
            </div>

            <div className="basket-content">
              <h2 className="basket-title">{item.title}</h2>
              <h3 className="basket-title">{item.category}</h3>

              <div className="basket-info">
                <span className="basket-price">{item.price}₺</span>
                <span className="basket-multiplier">{item.quantity}x</span>
              </div>

              <div className="basket-actions">
                <div className="quantity-controls">
                  <button onClick={() => decrement(item)} className="qty-btn decrease">-</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button onClick={() => increment(item)} className="qty-btn increase">+</button>
                </div>

                <button
                  onClick={() => dispatch(removeBasket(item.id))}
                  className="remove-btn"
                >
                  Sepetten Kaldır
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="basket-summary">
        <h3>Toplam Ürün: ({getTotalItems()})</h3>
        <div className="summary-row">
          <span>Toplam Tutar:</span>
          <span className="total-price">{getTotalPrice().toFixed(2)}₺</span>
        </div>
        <button className="checkout-btn">Ödemeye Geç</button>
      </div>

    </div>
  )
}

export default Basket
