import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { departmentsModel } from "./departments.model";

export const getAll = getAllHandler(departmentsModel);

export const getOne = getOneHandler(departmentsModel, 'Departments');

// validation on creation on validation file.
export const create = createHandler(departmentsModel);

export const update = updateHandler(departmentsModel, 'Departments');

export const remove = deleteHandler(departmentsModel, 'Departments');
