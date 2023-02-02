const mongoose = require("mongoose");
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`mongo database is connected!!! `);
} catch (error) {
  console.error(`Error: ${error} `);
}
