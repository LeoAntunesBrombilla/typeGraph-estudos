import { buildSchema } from 'type-graphql';

export const createSchema = async () =>
  await buildSchema({
    resolvers: ['/src/__tests__/*.ts'],
  });
