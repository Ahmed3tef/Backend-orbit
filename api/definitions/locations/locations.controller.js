import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../utils/crud-handlers";
import { locationsModel } from "./locations.model";

export const getAll = getAllHandler(locationsModel);

export const getOne = getOneHandler(locationsModel, 'Location');

// validation on creation on validation file.
export const create = createHandler(locationsModel);

export const update = updateHandler(locationsModel, 'Location');

export const remove = deleteHandler(locationsModel, 'Location');
