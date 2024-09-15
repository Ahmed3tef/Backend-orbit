import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { mechOptionsModel } from "./mech-options.model";

export const getAll = getAllHandler(mechOptionsModel);

export const getOne = getOneHandler(mechOptionsModel, 'MechOption');

// validation on creation on validation file.
export const create = createHandler(mechOptionsModel);

export const update = updateHandler(mechOptionsModel, 'MechOption');

export const remove = deleteHandler(mechOptionsModel, 'MechOption');
