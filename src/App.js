import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/Home/About/About';
import Inventory from './Pages/Home/Inventory/Inventory';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import PerfumeDetail from './Pages/PerfumeDetail/PerfumeDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddPerfume from './Pages/AddPerfume/AddPerfume';
import UserItems from './Pages/UserItems/UserItems';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:perfumeId' element={
          <RequireAuth>
            <PerfumeDetail></PerfumeDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addPerfume' element={
          <RequireAuth>
            <AddPerfume></AddPerfume>
          </RequireAuth>
        }></Route>
        <Route path='/userItems' element={
          <RequireAuth>
            <UserItems></UserItems>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
