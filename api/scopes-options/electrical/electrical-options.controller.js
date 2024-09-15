import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { electricalOptionsModel } from "./electrical-options.model";

export const getAll = getAllHandler(electricalOptionsModel);

export const getOne = getOneHandler(electricalOptionsModel, 'ElectricalOption');

// validation on creation on validation file.
export const create = createHandler(electricalOptionsModel);

export const update = updateHandler(electricalOptionsModel, 'ElectricalOption');

export const remove = deleteHandler(electricalOptionsModel, 'ElectricalOption');
