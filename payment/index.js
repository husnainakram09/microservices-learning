const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8091;

app.get("/", (req, res) => res.send("Payment services running!"));
app.get("/payment-list", (req, res) => {
  let response = {
    data: {
      item: [
        {
          id: 1,
          name: "payment 1",
        },
        {
          id: 2,
          name: "payment 2",
        },
      ],
    },
  };
  res.status(200).json(response);
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
