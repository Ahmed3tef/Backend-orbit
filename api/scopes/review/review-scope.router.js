import { Router } from 'express';

import { accessAllowedTo, tokenProtection } from '../../../controllers/auth';

import { create, getAll, getOne, remove, update } from './review-scope.controller';

const router = Router();

router.use(tokenProtection, accessAllowedTo('admin','user'));

router
  .route('/')
  .get(getAll)
  .post(
    // valiedation on creation
    create);

router
  .route('/:id')
  .get(getOne)
  .patch(
    // valiedation
    update
  )
  .delete(
    // valiedation on creation
    remove
  );
