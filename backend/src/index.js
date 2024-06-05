const app = require("./app");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  console.log(`Main API is on: http://localhost:5000/api/v1`);
  /* eslint-enable no-console */
});
