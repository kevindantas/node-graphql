const graphql = require('graphql');
const graphqlHttp = require('express-graphql');
const express = require('express');
const schema = require('./src/schema');
const app = express();

app.use('/graphql', graphqlHttp({
  schema: schema,
  graphiql: true,
  pretty: true
}));
app.listen(3000, () => {
  console.log(`Server running at: 3000`);
})
