import { Connection } from 'typeorm';
import { gCall } from '../test-utils/gCall';


import { testConn } from '../test-utils/testConn';

console.log('no teste')

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation {
  addCharacter(
    name: "luke"
    mass: "70"
    height: "170"
  ) {
    id
    name
    mass
    height
  }
}
`;

describe('addCharacter', () => {
  it('create character', async () => {
    console.log(
      await gCall({
        source: registerMutation,
      }),
    );
  });
});
