import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { asbuiltScopeModel } from "./asbuilt-scope.model";

export const getAll = getAllHandler(asbuiltScopeModel);

export const getOne = getOneHandler(asbuiltScopeModel, 'AsbuiltScope');

// validation on creation on validation file.
export const create = createHandler(asbuiltScopeModel);

export const update = updateHandler(asbuiltScopeModel, 'AsbuiltScope');

export const remove = deleteHandler(asbuiltScopeModel, 'AsbuiltScope');
