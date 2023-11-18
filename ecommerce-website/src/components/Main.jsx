import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import FAQs from '../pages/FAQs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Cart from '../pages/Cart';
import Tracking from '../pages/Tracking';
import CheckOut from '../pages/CheckOut';
import Account from '../pages/Account';

const Main = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blogdetails" element={<BlogDetails />} />
    <Route path='/about' element={<About />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/faq" element={<FAQs />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="forgotpassword" element={<ForgotPassword />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/tracking" element={<Tracking />} />
    <Route path="/checkout" element={<CheckOut />} />
    <Route path="/account" element={<Account />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  );
};
export default Main;