import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { tenderScopeModel } from "./tender-scope.model";

export const getAll = getAllHandler(tenderScopeModel);

export const getOne = getOneHandler(tenderScopeModel, 'TenderScope');

// validation on creation on validation file.
export const create = createHandler(tenderScopeModel);

export const update = updateHandler(tenderScopeModel, 'TenderScope');

export const remove = deleteHandler(tenderScopeModel, 'TenderScope');
