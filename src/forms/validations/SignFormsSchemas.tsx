import * as z from "zod";
import { addressRegex, phoneRegex, passwordRegex } from "../validations/regex";

// ZOD: schema do login
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Preencha o campo de email")
    .email("Insira um email válido"),
  password: z.string().nonempty("Preencha o campo de senha"),
});

// ZOD: schema do login
export const signUpSchema = z.object({
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
  phone: z
    .string()
    .nonempty("Preencha o campo de telefone")
    .regex(
      phoneRegex,
      "Insira um número de telefone válido (desconsiderando o país)"
    ),
  address: z
    .string()
    .nonempty("Preencha o campo de endereço")
    .regex(addressRegex, "Insira um CEP válido (formato 00000-000)"),
});

// Tipagem dos schemas
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
