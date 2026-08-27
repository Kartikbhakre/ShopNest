const express = require("express");
const path = require('path');
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/authRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const analyticsRoutes = require("./routes/analyticsRoutes.js");

env.config({path:".env"});
connectDB();







const app = express();
app.use(cors(
    {
        origin:['http://localhost:3000','http://127.0.0.1:3000', process.env.FRONTEND_UR],
        credentials:true
    }
));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
}

app.use("/api/auth",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/payment",paymentRoutes);
app.use("/api/analytics" , analyticsRoutes);



const port = process.env.PORT || 1001 
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})