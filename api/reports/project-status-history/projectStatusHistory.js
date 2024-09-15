import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../utils/crud-handlers";
import { projectStatusHistoryModel } from "./projectStatusHistory.model";

export const getAll = getAllHandler(projectStatusHistoryModel);

export const getOne = getOneHandler(projectStatusHistoryModel, 'projectStatusHistory');

// validation on creation on validation file.
export const create = createHandler(projectStatusHistoryModel);

export const update = updateHandler(projectStatusHistoryModel, 'projectStatusHistory');

export const remove = deleteHandler(projectStatusHistoryModel, 'projectStatusHistory');
