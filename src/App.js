import './App.css';
import { Outlet } from "react-router-dom";
import Header from './Components/HeaderNav';
import Footer from './Components/FooterNav';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;