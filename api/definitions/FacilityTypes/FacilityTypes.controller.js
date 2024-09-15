import { createHandler, deleteHandler, getAllHandler, getOneHandler, updateHandler } from "../../utils/crud-handlers";
import { facilityTypesModel } from "./FacilityTypes.model";

export const getAll = getAllHandler(facilityTypesModel);

export const getOne = getOneHandler(facilityTypesModel, 'FacilityType');

// validation on creation on validation file.
export const create = createHandler(facilityTypesModel);

export const update = updateHandler(facilityTypesModel, 'FacilityType');

export const remove = deleteHandler(facilityTypesModel, 'FacilityType');
