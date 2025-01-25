import { RequestStatus } from "@reducers/generic";

export interface PersonState {
  getAllStatus: keyof typeof RequestStatus;
  createStatus: keyof typeof RequestStatus;
  editStatus: keyof typeof RequestStatus;
  deleteStatus: keyof typeof RequestStatus;
}

export type KnownAction = {};
