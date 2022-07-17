import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './Navbar/Home';
import About from './Navbar/About';
import Users from './Navbar/Users';
import Product from './Navbar/Product';
import Productdetail from './Product/Product-detail';
import Userdetail from './User/Userdetail';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path={'/users'} element={<Users/>}></Route>
      <Route path={'/users/:id'} element={<Userdetail/>}></Route>
      <Route path={'/product'} element={<Product/>}></Route>
      <Route path={'/product/:id'} element={<Productdetail/>}></Route>

      {/* <Route
        path="/users/:id"
        element={
          // <PrivateRoute>
            <UserPage />
          // </PrivateRoute>
        }
      /> */}

    </Routes>
    </div>
  );
}

export default App;
