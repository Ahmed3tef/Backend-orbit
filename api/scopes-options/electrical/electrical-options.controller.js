import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { electricalOptionsModel } from "./electrical-options.model";

export const getAll = getAllHandler(electricalOptionsModel);

export const getOne = getOneHandler(electricalOptionsModel, 'ElectricalOptions');

// validation on creation on validation file.
export const create = createHandler(electricalOptionsModel);

export const update = updateHandler(electricalOptionsModel, 'ElectricalOptions');

export const remove = deleteHandler(electricalOptionsModel, 'ElectricalOptions');
