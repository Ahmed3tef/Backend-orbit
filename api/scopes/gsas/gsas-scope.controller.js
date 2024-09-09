import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { gsasScopeModel } from "./gsas-scope.model";

export const getAll = getAllHandler(gsasScopeModel);

export const getOne = getOneHandler(gsasScopeModel, 'GsasScope');

// validation on creation on validation file.
export const create = createHandler(gsasScopeModel);

export const update = updateHandler(gsasScopeModel, 'GsasScope');

export const remove = deleteHandler(gsasScopeModel, 'GsasScope');
