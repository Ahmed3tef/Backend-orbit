import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { mechOptionsModel } from "./mech-options.model";

export const getAll = getAllHandler(mechOptionsModel);

export const getOne = getOneHandler(mechOptionsModel, 'MechOptions');

// validation on creation on validation file.
export const create = createHandler(mechOptionsModel);

export const update = updateHandler(mechOptionsModel, 'MechOptions');

export const remove = deleteHandler(mechOptionsModel, 'MechOptions');
