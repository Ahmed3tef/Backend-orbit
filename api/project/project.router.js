import { Router } from 'express';

import { accessAllowedTo, tokenProtection } from '../../../controllers/auth';

import { create,   getAll,  getOne, remove, update } from './project.controller';

const router = Router();

router.use(tokenProtection, accessAllowedTo('admin','user'));

router
  .route('/')
  .get(getAll)
  .post( create);

router
  .route('/:id')
  .get(getOne)
  .patch(
    update
  )
  .delete(
    remove
  );
