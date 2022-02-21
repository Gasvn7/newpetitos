const express = require('express');
const path = require('path');
const mainRoutes = require('./routers/main.routes.js')
const productsRoutes = require('./routers/products.routes.js')
const userRoutes = require('./routers/user.routes.js')
const app = express();


app.use(express.static(path.resolve(__dirname, './public')));

app.use(mainRoutes);
app.use(productsRoutes);
app.use(userRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en Puerto: 3000"));
