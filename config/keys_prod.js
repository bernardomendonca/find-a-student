// Test to see which environemnt (development or production)
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
