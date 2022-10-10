import { rest } from 'msw';
import { projectTextHandlers } from '~/mocks/handlers/projectText';

export const handlers = [
  ...projectTextHandlers,
  rest.post('/login', async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
