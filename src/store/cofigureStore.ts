import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import { ApplicationState, reducers } from "@store/index";

/**
 * Configura e cria o store do Redux para a aplicação.
 *
 * Este arquivo configura o middleware, a integração com o Redux DevTools (se disponível no navegador),
 * e os reducers para a aplicação.
 *
 * **Dependências**:
 * - `redux`: Para a criação e manipulação do store.
 * - `redux-thunk`: Middleware para ações assíncronas.
 * - `redux-logger`: Middleware para log de ações no console.
 * - `@store/index`: Onde os reducers da aplicação são centralizados.
 *
 * @param initialState O estado inicial da aplicação, caso necessário para a configuração do store.
 * @returns O store configurado com reducers e middleware.
 */
export default function configureStore(initialState?: ApplicationState) {
  const rootReducer = combineReducers({
    ...reducers,
  });

  const enhancers: any[] = [];

  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const middleware: any[] = [thunk, logger];

  return createStore(
    rootReducer,
    initialState,
    compose<any>(applyMiddleware(...middleware), ...enhancers) // Aplicando os middleware e enhancers
  );
}
