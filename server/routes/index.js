import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
import orderRoutes from './orderRoutes.js';

function route(app) {
  app.use('/api/products', productRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
  });
}

export default route;
