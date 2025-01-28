/**
 * Enum que representa os diferentes estados de uma requisição assíncrona.
 *
 * A constante `RequestStatus` define três valores possíveis para o status de uma requisição no Redux, sendo utilizados
 * para indicar o estado atual de uma operação de carregamento (como uma chamada à API). Esses valores ajudam a controlar
 * a interface de usuário, exibindo estados apropriados como "carregando", "concluído" ou "falha".
 *
 * @constant RequestStatus
 * @type {Object}
 * @property {string} loading - Indica que a requisição está em andamento.
 * @property {string} idle - Indica que não há requisição em andamento.
 * @property {string} failure - Indica que a requisição falhou.
 *
 * Este objeto é utilizado em conjunto com o estado da aplicação, como por exemplo no estado da pessoa no Redux, para
 * controlar a exibição de elementos da interface (como loaders ou mensagens de erro).
 */
export const RequestStatus = {
  loading: "loading",
  idle: "idle",
  failure: "failure",
} as const;
