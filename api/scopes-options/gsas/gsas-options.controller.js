import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { gsasOptionsModel } from "./gsas-options.model";

export const getAll = getAllHandler(gsasOptionsModel);

export const getOne = getOneHandler(gsasOptionsModel, 'GsasOptions');

// validation on creation on validation file.
export const create = createHandler(gsasOptionsModel);

export const update = updateHandler(gsasOptionsModel, 'GsasOptions');

export const remove = deleteHandler(gsasOptionsModel, 'GsasOptions');
