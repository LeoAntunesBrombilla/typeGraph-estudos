import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import * as Express from 'express';
import { createConnection } from 'typeorm';
import { CharacterResolver } from './resolvers/CharacterResolver';


const main = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.log(err);
  }

  const schema = await buildSchema({
    resolvers: [CharacterResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

main();
