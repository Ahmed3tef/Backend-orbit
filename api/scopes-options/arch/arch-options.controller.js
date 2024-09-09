import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { archOptionsModel } from "./arch-options.model";


export const getAll = getAllHandler(archOptionsModel);

export const getOne = getOneHandler(archOptionsModel, 'ArchOptions');

// validation on creation on validation file.
export const create = createHandler(archOptionsModel);

export const update = updateHandler(archOptionsModel, 'ArchOptions');

export const remove = deleteHandler(archOptionsModel, 'ArchOptions');
