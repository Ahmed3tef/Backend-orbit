import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { structureOptionsModel } from "./structure-options.model";


export const getAll = getAllHandler(structureOptionsModel);

export const getOne = getOneHandler(structureOptionsModel, 'StructureOptions');

// validation on creation on validation file.
export const create = createHandler(structureOptionsModel);

export const update = updateHandler(structureOptionsModel, 'StructureOptions');

export const remove = deleteHandler(structureOptionsModel, 'StructureOptions');
