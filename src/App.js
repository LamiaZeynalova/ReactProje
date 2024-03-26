
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './layout/footer/footer';
import Navbar from './layout/header/navbar';



function App() {
  return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
     
  );
}

export default App;
