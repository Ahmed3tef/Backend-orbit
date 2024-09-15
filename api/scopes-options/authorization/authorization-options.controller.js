import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { authorizationOptionsModel } from "./authorization-options.model";


export const getAll = getAllHandler(authorizationOptionsModel);

export const getOne = getOneHandler(authorizationOptionsModel, 'AuthorizationOption');

// validation on creation on validation file.
export const create = createHandler(authorizationOptionsModel);

export const update = updateHandler(authorizationOptionsModel, 'AuthorizationOption');

export const remove = deleteHandler(authorizationOptionsModel, 'AuthorizationOption');
