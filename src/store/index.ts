import * as Person from "@reducers/person";

export interface ApplicationState {
  people: Person.PersonState;
}

export const reducers = {
  people: Person.reducer || undefined,
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
