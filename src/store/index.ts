import * as Person from "@reducers/person";

/**
 * Interface que representa o estado global da aplicação.
 *
 * A interface `ApplicationState` define a estrutura do estado global, contendo as informações relacionadas
 * ao estado da pessoa, que são gerenciadas pelo reducer `Person.reducer`.
 *
 * @interface ApplicationState
 * @property {Person.PersonState} people - O estado da pessoa, gerenciado pelo reducer da pessoa.
 */
export interface ApplicationState {
  people: Person.PersonState;
}

/**
 * Objetos de reducers utilizados na aplicação.
 *
 * A constante `reducers` combina os reducers de diferentes partes da aplicação, neste caso, o reducer para
 * gerenciar o estado das pessoas. O reducer `Person.reducer` é importado e atribuído à chave `people`.
 *
 * @constant reducers
 * @type {Object}
 * @property {Person.reducer} people - O reducer responsável por gerenciar o estado das pessoas.
 */
export const reducers = {
  people: Person.reducer || undefined, // O reducer de pessoas, caso exista
};

/**
 * Tipo para ações do Redux que retornam um thunk.
 *
 * `AppThunkAction` é uma interface genérica que descreve uma ação que retorna uma função (thunk),
 * que pode ser usada para realizar operações assíncronas ou lógica antes de despachar ações no Redux.
 * O thunk recebe dois parâmetros: `dispatch`, para disparar ações, e `getState`, para acessar o estado da aplicação.
 *
 * @interface AppThunkAction
 * @template TAction O tipo da ação que será despachada.
 * @param {function} dispatch - Função para disparar ações para o Redux.
 * @param {function} getState - Função para acessar o estado atual da aplicação.
 */
export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
