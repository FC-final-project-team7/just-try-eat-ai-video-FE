import { rest } from 'msw';
import {
  getProjectText,
  projectText,
  updateProjectSentence,
} from '~/mocks/handlers/data';

import { IProject } from '~/types/project/projects';
import { getPaths } from '~/mocks/handlers/utils';

export const projectTextHandlers = [
  rest.get(getPaths('/projects/:id'), (req, res, ctx) => {
    const { id } = req.params;
    if (!id) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(getProjectText(id as string)));
  }),

  rest.put(getPaths('/projects/auto'), async (req, res, ctx) => {
    try {
      const v = await req.json<IProject>();
      projectText[v.projectId] = v;
    } catch (e) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200));
  }),

  rest.put(getPaths('/projects/edit'), async (req, res, ctx) => {
    try {
      const v = await req.json<IProject>();
      return res(ctx.status(200), ctx.json(updateProjectSentence(v)));
    } catch (e) {
      return res(ctx.status(400));
    }
  }),
];
