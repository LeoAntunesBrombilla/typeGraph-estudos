import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
  console.log('test_conn');
  return createConnection({
    type: 'mongodb',
    url: 'mongodb+srv://admin:admin@cluster0.ybymc.mongodb.net/Cluster0?retryWrites=true&w=majority',
    database: 'GRAPHQL-ESTUDOS-TESTE',
    useNewUrlParser: true,
    synchronize: drop,
    dropSchema: drop,
    entities: ['./src/__tests__/*.ts'],
  });
};
