import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { reviewModifyScopeModel } from "./reviewModify-scope.model";

export const getAll = getAllHandler(reviewModifyScopeModel);

export const getOne = getOneHandler(reviewModifyScopeModel, 'ReviewModifyScope');

// validation on creation on validation file.
export const create = createHandler(reviewModifyScopeModel);

export const update = updateHandler(reviewModifyScopeModel, 'ReviewModifyScope');

export const remove = deleteHandler(reviewModifyScopeModel, 'ReviewModifyScope');
