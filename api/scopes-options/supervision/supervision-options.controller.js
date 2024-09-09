import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { supervisionOptionsModel } from "./supervision-options.model";

export const getAll = getAllHandler(supervisionOptionsModel);

export const getOne = getOneHandler(supervisionOptionsModel, 'SupervisionOptions');

// validation on creation on validation file.
export const create = createHandler(supervisionOptionsModel);

export const update = updateHandler(supervisionOptionsModel, 'SupervisionOptions');

export const remove = deleteHandler(supervisionOptionsModel, 'SupervisionOptions');
