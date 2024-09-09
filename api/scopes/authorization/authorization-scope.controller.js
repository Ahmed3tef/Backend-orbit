import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { authorizationScopeModel } from "./authorization-scope.model";

export const getAll = getAllHandler(authorizationScopeModel);

export const getOne = getOneHandler(authorizationScopeModel, 'AuthorizationScope');

// validation on creation on validation file.
export const create = createHandler(authorizationScopeModel);

export const update = updateHandler(authorizationScopeModel, 'AuthorizationScope');

export const remove = deleteHandler(authorizationScopeModel, 'AuthorizationScope');
