import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { redesignScopeModel } from "./redesign-scope.model";

export const getAll = getAllHandler(redesignScopeModel);

export const getOne = getOneHandler(redesignScopeModel, 'RedesignScope');

// validation on creation on validation file.
export const create = createHandler(redesignScopeModel);

export const update = updateHandler(redesignScopeModel, 'RedesignScope');

export const remove = deleteHandler(redesignScopeModel, 'RedesignScope');
