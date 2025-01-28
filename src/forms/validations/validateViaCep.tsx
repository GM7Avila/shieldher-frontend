import axios from "axios";

/**
 * Função para validar o CEP usando a API dos Correios.
 * @param cep O CEP a ser validado.
 * @returns true se o CEP for válido, false caso contrário.
 */
export const validateCep = async (cep: string): Promise<boolean> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return !response.data.erro;
  } catch (error) {
    console.error("Erro ao validar o CEP:", error);
    return false;
  }
};
