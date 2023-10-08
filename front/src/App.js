import "./App.css"
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PaymentSucces from "./pages/PaymentSucces"


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/payment-success" element={<PaymentSucces />}/>

      </Routes>

    </div>
  );
}

export default App;
