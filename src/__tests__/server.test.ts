import { beforeAll, describe, expect, it } from '@jest/globals';
import supertest, { SuperTest, Test } from 'supertest';
import server from '../server';

describe('server', () => {
  let request: SuperTest<Test>;

  beforeAll(() => {
    request = supertest(server);
  });

  it('health route returns 200', async () => {
    const response = await request.get('/healthz');
    expect(response.status).toEqual(200);
  });

  it('version route returns 200', async () => {
    const response = await request.get('/version');
    expect(response.status).toEqual(200);
  });
});
