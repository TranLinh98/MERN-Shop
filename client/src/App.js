import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './containers/HomeScreen';
import ProductScreen from './containers/ProductScreen';
import CartScreen from './containers/CartScreen';
import LoginScreen from './containers/LoginScreen';
import RegisterScreen from './containers/RegisterScreen';
import ProfileScreen from './containers/ProfileScreen';
import ShippingScreen from './containers/ShippingScreen';
import PaymentScreen from './containers/PaymentScreen';
import PlaceOrderScreen from './containers/PlaceOrderScreen';
import OrderScreen from './containers/OrderScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
