import { Router } from 'express';

import { accessAllowedTo, tokenProtection } from '../../../controllers/auth';

import { create,   getAll,  getOne, remove, update } from './structure-options.controller';

const router = Router();

router.use(tokenProtection, accessAllowedTo('admin','user'));

router
  .route('/')
  .get(getAll)
  .post(productWishlistValidation, create);

router
  .route('/:id')
  .get(getOne)
  .patch(
    updateSubCategoryValidation,
    update
  )
  .delete(
    deleteSubCategoryValidation,
    remove
  );
