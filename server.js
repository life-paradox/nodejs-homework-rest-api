const mongoose = require('mongoose');
const app = require('./app');
mongoose.set('strictQuery', true);

require('dotenv').config();

const DB = process.env.MONGO_URL;
const PORT = process.env.PORT;
mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log(`Server running. Use our API on port: ${PORT}`);
  })
  .catch(error => {
    console.log(`Can't connect to database, ${error}`);
    process.exit(1);
  });
