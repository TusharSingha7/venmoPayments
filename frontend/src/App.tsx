import './App.css'
import Home from './pages/home'
import Explore from './pages/explore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Transaction from './pages/transaction'
import Account from './pages/account'
import Rewards from './pages/rewards'
import SignUp from './pages/signup'
import Landing from './pages/landing'
import Login from './pages/login'
import Verify from './pages/verify'
import Transfer from './pages/transfer'
import { GoogleOAuthProvider } from '@react-oauth/google'
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
            <GoogleOAuthProvider clientId='712489126174-jdd0dejpfg95odcn3pujslcpd85e27pk.apps.googleusercontent.com'><Login/></GoogleOAuthProvider>}></Route>
        <Route path='/signup' element={
            <GoogleOAuthProvider clientId='712489126174-jdd0dejpfg95odcn3pujslcpd85e27pk.apps.googleusercontent.com'><SignUp/></GoogleOAuthProvider>}></Route>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/transfer' element={<Transfer/>}></Route>
        <Route path='/rewards' element={<Rewards/>}></Route>
        <Route path='/login/verify' element={<Verify/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
