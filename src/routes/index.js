const express = require('express');
const homeRoutes = require('./home.js');
const userRoutes = require('./user.js');
const productRoutes = require('./product.js');
const orderRoutes = require('./order.js');
const shoppingCartRoutes = require('./shoppingCart.js');
const commentsRatingRoutes = require('./commentsRating.js');
const laptopRoutes = require('./laptop.js')
const tabletRoutes = require('./tablet.js')
const tvRoutes = require('./tv.js')
const CellPhoneRoutes = require('./cellPhone.js');
/* const payments  = require('./payments.js'); */
const comments = require('./comment.js');
const admin = require('./admin.js');
const productDiscount = require("./productDiscount.js")

const app = express();

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/shoppingCart', shoppingCartRoutes);
app.use('/commentsRating', commentsRatingRoutes);
app.use('/laptop', laptopRoutes);
app.use('/tablet', tabletRoutes);
app.use('/tv', tvRoutes)
app.use('/cellPhone', CellPhoneRoutes);
/* app.use('/payments',payments); */
app.use('/comments', comments);
app.use('/admin', admin);
app.use('/discount', productDiscount);


module.exports = app;