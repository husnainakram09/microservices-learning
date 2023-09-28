const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8081;

app.get("/", (req, res) => res.send("Order services running!"));
app.get("/order-list", (req, res) => {
  let response = {
    data: {
      item: [
        {
          id: 1,
          name: "order 1",
        },
        {
          id: 2,
          name: "order 2",
        },
      ],
    },
  };
  res.status(200).json(response);
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
