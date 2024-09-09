import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { prepareOptionsModel } from "./prepare-options.model";

export const getAll = getAllHandler(prepareOptionsModel);

export const getOne = getOneHandler(prepareOptionsModel, 'PrepareOptions');

// validation on creation on validation file.
export const create = createHandler(prepareOptionsModel);

export const update = updateHandler(prepareOptionsModel, 'PrepareOptions');

export const remove = deleteHandler(prepareOptionsModel, 'PrepareOptions');
