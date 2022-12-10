import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Top from './component/navigators/Top'
import Footer from './component/Footer'
import Home from './page/Home';
import Login from './page/authentication/Login'
import Signup from './page/authentication/Signup';
import ForgotPassword from './page/authentication/ForgotPassword';
import Container from './page/user/Container';
import Profile from './page/user/account/Profile'
import EditProfile from './page/user/account/EditProfile';
import Users from './Users'
import Address from './page/user/account/Addresses';
import Addresses from './Addresses';
import AddAddress from './page/user/account/AddAddress'
import EditAddress from './page/user/account/EditAddress'
import ChangePassword from './page/user/account/ChangePassword';
import Purchase from './page/user/purchase/Purchase';
import OrderDetails from './page/user/purchase/OrderDetails';

function App() {
  return (
    <Users>
    <Addresses>
    <Router>
      <Top/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/recover' element={<ForgotPassword/>}/>
          <Route path='user'element={<Container/>}>
           <Route path='account/profile' element={<Profile/>}/>
           <Route path='account/profile/edit' element={<EditProfile/>}/>
           <Route path='account/address' element={<Address/>}/>
           <Route path='account/address/add' element={<AddAddress/>}/>
           <Route path='account/address/edit' element={<EditAddress/>}/>
           <Route path='account/password' element={<ChangePassword/>}/>
           <Route path='account/purchase' element={<Purchase/>}/>
           <Route path='account/purchase/details' element={<OrderDetails/>}/>
          </Route>
      </Routes>
      <Footer/>
    </Router>
    </Addresses>
    </Users>
  );
}

export default App;
