import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

const basketFromStorage = localStorage.getItem("basket")
const popularFromStorage = localStorage.getItem("popular")

const initialState = {
  products: [],
  basket: basketFromStorage ? JSON.parse(basketFromStorage) : [],
  populars: popularFromStorage ? JSON.parse(popularFromStorage) : [],
}


export const getProducts = createAsyncThunk("data/getProducts", async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
})

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  addBasket: (state, action) => {
    const product = action.payload
    const existing = state.basket.find(item => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      state.basket.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("basket", JSON.stringify(state.basket))
  },

  removeBasket: (state, action) => {
    state.basket = state.basket.filter(item => item.id !== action.payload)
    localStorage.setItem("basket", JSON.stringify(state.basket))
  },

  updateBasket: (state, action) => {
    const product = action.payload
    const existing = state.basket.find(item => item.id === product.id)

    if (existing) {
      existing.quantity -= 1

      if (existing.quantity <= 0) {
        state.basket = state.basket.filter(item => item.id !== product.id)
      }

      localStorage.setItem("basket", JSON.stringify(state.basket))
    }
  },
  addToPopular: (state, action) => {
    const popular = action.payload
    const existing = state.populars.find(item => item.id == popular.id)
    if(!existing){
      state.populars.push(popular)  
    }
    localStorage.setItem("popular", JSON.stringify(state.populars))
  },
  removePopular: (state, action) => {
    state.populars = state.populars.filter(item => item.id != action.payload)
    localStorage.setItem("popular", JSON.stringify(state.populars))
  }
},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
    })
  }
})


export const { addBasket, removeBasket, updateBasket, addToPopular, removePopular } = appSlice.actions

export default appSlice.reducer