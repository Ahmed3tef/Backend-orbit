import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { prepareOptionsModel } from "./prepare-options.model";

export const getAll = getAllHandler(prepareOptionsModel);

export const getOne = getOneHandler(prepareOptionsModel, 'PrepareOption');

// validation on creation on validation file.
export const create = createHandler(prepareOptionsModel);

export const update = updateHandler(prepareOptionsModel, 'PrepareOption');

export const remove = deleteHandler(prepareOptionsModel, 'PrepareOption');
