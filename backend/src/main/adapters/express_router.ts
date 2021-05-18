import { Controller } from '@presentation/protocols/controller';
import { Request, Response } from 'express';

export const adapt = (controller: Controller) => async (request: Request, response: Response) => {
  const data = {
    ...(request.body || {}),
    ...(request.params || {}),
  };
  await controller.handle(data);

  return response.status(200).json({ ok: true });
};
