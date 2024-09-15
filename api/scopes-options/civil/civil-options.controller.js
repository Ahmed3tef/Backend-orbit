import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { civilOptionsModel } from "./civil-options.model";

export const getAll = getAllHandler(civilOptionsModel);

export const getOne = getOneHandler(civilOptionsModel, 'CivilOption');

// validation on creation on validation file.
export const create = createHandler(civilOptionsModel);

export const update = updateHandler(civilOptionsModel, 'CivilOption');

export const remove = deleteHandler(civilOptionsModel, 'CivilOption');
