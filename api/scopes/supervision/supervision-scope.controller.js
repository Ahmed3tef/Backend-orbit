import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { supervisionScopeModel } from "./supervision-scope.model";

export const getAll = getAllHandler(supervisionScopeModel);

export const getOne = getOneHandler(supervisionScopeModel, 'SupervisionScope');

// validation on creation on validation file.
export const create = createHandler(supervisionScopeModel);

export const update = updateHandler(supervisionScopeModel, 'SupervisionScope');

export const remove = deleteHandler(supervisionScopeModel, 'SupervisionScope');
