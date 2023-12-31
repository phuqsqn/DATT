const express = require('express');
const cors = require('cors');

const app = express();
const connectDB = require('./config/data');
const router = require('./router');

app.use(cors());

app.use(express.json());

router(app);

connectDB();
app.listen(5000, () => {
  console.log('Chạy Thành Công cổng 5000');
});
