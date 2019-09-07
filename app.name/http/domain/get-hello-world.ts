import { Router } from 'express';

export default (router: Router) => {
  router.get(
    '/hello',
    async (req, res, next) => {
      res.status(200).json({ msg: 'Hello World!' });
    },
  );
};
