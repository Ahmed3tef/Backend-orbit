import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { reviewScopeModel } from "./review-scope.model";

export const getAll = getAllHandler(reviewScopeModel);

export const getOne = getOneHandler(reviewScopeModel, 'ReviewScope');

// validation on creation on validation file.
export const create = createHandler(reviewScopeModel);

export const update = updateHandler(reviewScopeModel, 'ReviewScope');

export const remove = deleteHandler(reviewScopeModel, 'ReviewScope');
