import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { tenderOptionsModel } from "./tender-options.model";

export const getAll = getAllHandler(tenderOptionsModel);

export const getOne = getOneHandler(tenderOptionsModel, 'TenderOption');

// validation on creation on validation file.
export const create = createHandler(tenderOptionsModel);

export const update = updateHandler(tenderOptionsModel, 'TenderOption');

export const remove = deleteHandler(tenderOptionsModel, 'TenderOption');
