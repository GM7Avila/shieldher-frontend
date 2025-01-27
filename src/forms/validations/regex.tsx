// Senha: 6 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/;

// Telefone: (XX) XXXXX-XXXX
export const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;

// zipcode: XXXXX-XXX
export const addressRegex = /^\d{5}-\d{3}$/;
