import "./App.css";
import "./scss/app.scss";
import Home from "./pages/home";
import Header from "./component/header";
import Cart from "./pages/cart";
import NotFound from "./component/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="wrapper">  
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
