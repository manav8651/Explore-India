const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connections successful');
  });
// let port;
// if (process.env.NODE_ENV.trim() === 'production') port = process.env.PORT_PROD;
// else port = process.env.PORT_DEV;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
