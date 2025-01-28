import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * Props para o componente FormWrapper.
 *
 * @template TFormData - O tipo de dados do formulário.
 *
 * @param children - Função que recebe os props necessários para registrar, controlar o formulário e acessar o estado.
 * @param onSubmit - Função a ser chamada quando o formulário for submetido com dados válidos.
 * @param schema - O schema Zod utilizado para validação dos dados do formulário.
 */
type FormWrapperProps<TFormData extends FieldValues> = {
  children: (props: {
    register: UseFormReturn<TFormData>["register"];
    formState: UseFormReturn<TFormData>["formState"];
    control: UseFormReturn<TFormData>["control"];
  }) => JSX.Element;

  onSubmit: (data: TFormData) => void;

  schema: z.ZodType<TFormData>;
};

/**
 * Componente wrapper para formulários que integra `react-hook-form` com validação usando Zod.
 *
 * @template TFormData - Tipo de dados do formulário.
 *
 * Este componente fornece uma maneira de facilmente configurar o formulário com validação, controle
 * de estado e manipulação de envio.
 */
export function FormWrapper<TFormData extends FieldValues>({
  children,
  onSubmit,
  schema,
}: FormWrapperProps<TFormData>) {
  const { register, handleSubmit, formState, control } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({ register, formState, control })}
    </form>
  );
}
