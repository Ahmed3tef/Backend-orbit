import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { prepareScopeModel } from "./prepare-scope.model";

export const getAll = getAllHandler(prepareScopeModel);

export const getOne = getOneHandler(prepareScopeModel, 'PrepareScope');

// validation on creation on validation file.
export const create = createHandler(prepareScopeModel);

export const update = updateHandler(prepareScopeModel, 'PrepareScope');

export const remove = deleteHandler(prepareScopeModel, 'PrepareScope');
