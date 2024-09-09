import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../../utils/crud-handlers";
import { shopDrawingScopeModel } from "./shopDrawing-scope.model";

export const getAll = getAllHandler(shopDrawingScopeModel);

export const getOne = getOneHandler(shopDrawingScopeModel, 'ShopDrawingScope');

// validation on creation on validation file.
export const create = createHandler(shopDrawingScopeModel);

export const update = updateHandler(shopDrawingScopeModel, 'ShopDrawingScope');

export const remove = deleteHandler(shopDrawingScopeModel, 'ShopDrawingScope');
