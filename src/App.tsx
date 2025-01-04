import './App.css'
import Home from './pages/home'
import Explore from './pages/explore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Transaction from './pages/transaction'
import Account from './pages/account'
import Rewards from './pages/rewards'
import Card from './components/card'
import SignUp from './pages/signup'
import Landing from './pages/landing'
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Card heading='Login' placeholder='Enter email or Username' label1='Next' label2='Signup'/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/rewards' element={<Rewards/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
