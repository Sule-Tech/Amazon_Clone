// import logo from './logo.svg';
import './App.css'
import Header from './compenents/Header/Header'
import Home from './compenents/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './compenents/checkout/Checkout'
import Login from './compenents/Login/Login'
import { useStateValue } from './compenents/contexts/StateProvider'
import { useEffect } from 'react'
import { auth } from './firebase'
import Payment from './compenents/Payment/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './compenents/Order/Orders'
const promise = loadStripe(
  'pk_test_51MNZg6ESksPW0D65h903bHLlSfCrIGyMPVzn4sht2UW1edJGuGWL8eWP95e8tnV6mIpZUTCNSrYTV1R0ZQkb30rs00uJEc6zsp'
)
function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/orders"
            exact
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Orders />
                </Elements>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
