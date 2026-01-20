import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaTruck, FaUndo, FaHeadset, FaStar } from 'react-icons/fa';
import '../css/Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()

  const popularProducts = [
    { id: 1, name: "Premium Kulaklık", price: "299₺", image: "🎧", rating: 4.5 },
    { id: 2, name: "Spor Ayakkabı", price: "599₺", image: "👟", rating: 4.8 },
    { id: 3, name: "Akıllı Saat", price: "1299₺", image: "⌚", rating: 4.7 }
  ];

  const features = [
    { id: 1, icon: <FaTruck />, title: "Ücretsiz Kargo", desc: "50₺ üzeri siparişlerde" },
    { id: 2, icon: <FaUndo />, title: "Kolay İade", desc: "14 gün içinde iade" },
    { id: 3, icon: <FaHeadset />, title: "7/24 Destek", desc: "Müşteri hizmetleri" },
    { id: 4, icon: <FaStar />, title: "Güvenli Alışveriş", desc: "SSL sertifikalı" }
  ];

  return (
    <div>
      <div className='section-1'>
        <div className='section1-content'>
          <h2>Alışverişin Yeni Adresi</h2>
          <p>En yeni ürünleri keşfedin, özel fiyatlardan yararlanın</p>
        </div>
        <div className='section1-btn'>
          <button onClick={() => navigate("/products")}><FaShoppingBag />Ürünleri Listele</button>
        </div>
        <div className='section1-cards'>
          <div className='section1-card'>
            <span>1000+</span>
            <p>Ürün</p>
          </div>
          <div className='section1-card'>
            <span>50K+</span>
            <p>Mutlu Müşteri</p>
          </div>
          <div className='section1-card'>
            <span>24/7</span>
            <p>Destek</p>
          </div>
        </div>
      </div>

      <div className='section-2'>
        <h2 style={{ fontSize: "2rem" }}>Kategoriler</h2>
        <div className='section2-cards'>
          <div onClick={()=> navigate("/tech")} style={{backgroundColor:"#3498db"}} className='section2-card'>
            <div style={{fontSize:"3rem"}}>📱</div>
            <h2>Elektronik</h2>
          </div>
          <div onClick={()=> navigate("/man")} style={{backgroundColor:"#e74c3c"}} className='section2-card'>
            <div style={{fontSize:"3rem"}}>👕</div>
            <h2>Erkek Giyim</h2>
          </div>
          <div onClick={()=> navigate("/woman")} style={{backgroundColor:"#2ecc71"}} className='section2-card'>
            <div style={{fontSize:"3rem"}}>👗</div>
            <h2>Kadın Giyim</h2>
          </div>
          <div onClick={()=> navigate("/accessory")} style={{backgroundColor:"#f39c12"}} className='section2-card'>
            <div style={{fontSize:"3rem"}}>⌚</div>
            <h2>Aksesuar</h2>
          </div>
        </div>
      </div>

      <div className="section-3">
        <h2 style={{ fontSize: "2rem" }}>Popüler Ürünler</h2>
        <div className="section3-cards">
          {
            popularProducts.map(item => (
              <div key={item.id} style={{ cursor: "pointer" }} className='section3-card'>
                <div>
                  <div style={{ fontSize: "5rem" }}>{item.image}</div>
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <div><FaStar style={{ color: "#f39c12" }} /><FaStar style={{ color: "#f39c12" }} /><FaStar style={{ color: "#f39c12" }} /><FaStar style={{ color: "#f39c12" }} /><FaStar /></div><span>{item.rating}</span>
                  </div>
                  <p style={{ color: "#254af0", fontSize: "1.5rem", fontWeight: "600" }}>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
        <button onClick={() => navigate("/products")} className='section3-btn'>Tüm Ürünleri Gör</button>
      </div>

      <div className="section-4">
        <div className='section4-cards'>
          {
            features.map(item => (
              <div key={item.id} className='section4-card'>
                <div style={{ color: "#254af0", fontSize: "3rem" }}>{item.icon}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                  <h2>{item.title}</h2>
                  <p style={{ fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="section-5">
        <div className="section5-content">
          <h2 style={{ fontSize: "3rem" }}>Özel Fırsatları Kaçırma!</h2>
          <p>E-posta listemize katıl, %20 indirim kazan</p>
        </div>
        <div className='section5-form'>
          <input placeholder='E-posta adresiniz' type="email" />
          <button>Abone Ol</button>
        </div>
      </div>

    </div>
  )
}

export default Home