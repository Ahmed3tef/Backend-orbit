import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { archScopeModel } from "./arch-scope.model";

export const getAll = getAllHandler(archScopeModel);

export const getOne = getOneHandler(archScopeModel, 'ArchScope');

// validation on creation on validation file.
export const create = createHandler(archScopeModel);

export const update = updateHandler(archScopeModel, 'ArchScope');

export const remove = deleteHandler(archScopeModel, 'ArchScope');
