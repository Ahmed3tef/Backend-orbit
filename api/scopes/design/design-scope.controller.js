import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { designScopeModel } from "./design-scope.model";

export const getAll = getAllHandler(designScopeModel);

export const getOne = getOneHandler(designScopeModel, 'DesignScope');

// validation on creation on validation file.
export const create = createHandler(designScopeModel);

export const update = updateHandler(designScopeModel, 'DesignScope');

export const remove = deleteHandler(designScopeModel, 'DesignScope');
