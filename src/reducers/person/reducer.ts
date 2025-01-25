import { Action, Reducer } from "redux";
import { KnownAction, PersonState } from "./interface";

const unloadedStatus: PersonState = {
  getAllStatus: "idle",
  createStatus: "idle",
  editStatus: "idle",
  deleteStatus: "idle",
};

export const reducer: Reducer<PersonState | undefined> = (
  state: PersonState | undefined,
  incomingAction: Action
) => {
  if (state === undefined) {
    return unloadedStatus;
  }

  const action = incomingAction as KnownAction;
};
