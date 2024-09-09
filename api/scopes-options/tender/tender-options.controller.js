import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { tenderOptionsModel } from "./tender-options.model";

export const getAll = getAllHandler(tenderOptionsModel);

export const getOne = getOneHandler(tenderOptionsModel, 'TenderOptions');

// validation on creation on validation file.
export const create = createHandler(tenderOptionsModel);

export const update = updateHandler(tenderOptionsModel, 'TenderOptions');

export const remove = deleteHandler(tenderOptionsModel, 'TenderOptions');
