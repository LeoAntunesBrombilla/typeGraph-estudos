import { graphql } from 'graphql';
import { createSchema } from '../utils/createSchema';

interface Options {
  source: string;
}

export const gCall = async ({ source }: Options) => {
  console.log('gCall');
  return graphql({
    schema: await createSchema(),
    source,
  });
};
