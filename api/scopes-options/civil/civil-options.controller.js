import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { civilOptionsModel } from "./civil-options.model";

export const getAll = getAllHandler(civilOptionsModel);

export const getOne = getOneHandler(civilOptionsModel, 'CivilOptions');

// validation on creation on validation file.
export const create = createHandler(civilOptionsModel);

export const update = updateHandler(civilOptionsModel, 'CivilOptions');

export const remove = deleteHandler(civilOptionsModel, 'CivilOptions');
