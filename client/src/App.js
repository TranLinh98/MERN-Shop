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
import UserListScreen from './containers/UserListScreen';
import UserEditScreen from './containers/UserEditScreen';
import ProductListScreen from './containers/ProductListScreen';
import ProductEditScreen from './containers/ProductEditScreen';
import OrderListScreen from './containers/OrderListScreen';

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
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />

          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
