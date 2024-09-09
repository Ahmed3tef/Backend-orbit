import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { structureScopeModel } from "./structure-scope.model";

export const getAll = getAllHandler(structureScopeModel);

export const getOne = getOneHandler(structureScopeModel, 'structureScope');

// validation on creation on validation file.
export const create = createHandler(structureScopeModel);

export const update = updateHandler(structureScopeModel, 'structureScope');

export const remove = deleteHandler(structureScopeModel, 'structureScope');
