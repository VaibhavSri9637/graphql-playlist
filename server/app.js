const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { default: mongoose } = require("mongoose");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://crash-vaibhav:F5uRc4QB0yppLZPp@crash.wwwp3.mongodb.net/gql-ninja?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Now listening on port 4000");
});
