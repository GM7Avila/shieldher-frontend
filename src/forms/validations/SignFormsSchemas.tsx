import * as z from "zod";
import { addressRegex, phoneRegex, passwordRegex } from "../validations/regex";
import { validateCep } from "./validateViaCep";

/**
 * Schema Zod para validação de login.
 *
 * Valida o email e a senha do usuário.
 * - O campo "email" deve ser uma string não vazia e seguir o formato de um email válido.
 * - O campo "password" deve ser uma string não vazia.
 */
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Preencha o campo de email")
    .email("Insira um email válido"),
  password: z.string().nonempty("Preencha o campo de senha"),
});

/**
 * Schema Zod para validação de cadastro (signup).
 *
 * Valida os campos necessários para o cadastro do usuário.
 * - "name": campo de nome não vazio.
 * - "email": campo de email não vazio e com formato válido.
 * - "password": senha com requisitos de comprimento, caracteres especiais, maiúsculas e números.
 * - "passwordConfirmation": confirmação de senha que deve coincidir com a senha.
 * - "phone": número de telefone com formato válido.
 * - "address": endereço com formato válido de CEP e validação via consulta ao serviço de CEP.
 * - "terms": confirmação de aceitação dos termos de uso.
 */
export const signUpSchema = z
  .object({
    name: z.string().nonempty("Preencha o campo de nome"),
    email: z
      .string()
      .nonempty("Preencha o campo de email")
      .email("Insira um email válido"),
    password: z
      .string()
      .nonempty("Preencha o campo de senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(25, "A senha deve ter no máximo 25 caracteres")
      .regex(
        passwordRegex,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial"
      ),

    passwordConfirmation: z
      .string()
      .nonempty("Preencha o campo de confirmação de senha"),

    phone: z
      .string()
      .nonempty("Preencha o campo de telefone")
      .regex(phoneRegex, "Insira um telefone válido (XX) XXXXX-XXXX"),
    address: z
      .string()
      .nonempty("Preencha o campo de endereço")
      .regex(addressRegex, "Formato inválido (formato 00000-000)")
      .refine(async (cep) => await validateCep(cep), {
        message: "CEP inexistente, por favor insira um CEP valido",
      }),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os Termos de Uso.",
    }),
  })
  .superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem",
        path: ["passwordConfirmation"],
      });
    }
  });

/**
 * Tipagem dos Schemas
 */
export type LoginFormData = z.infer<typeof loginSchema>;

export type SignUpFormData = z.infer<typeof signUpSchema>;
