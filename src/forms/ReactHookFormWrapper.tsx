import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormWrapperProps<TFormData extends FieldValues> = {
  children: (props: {
    register: UseFormReturn<TFormData>["register"];
    formState: UseFormReturn<TFormData>["formState"];
  }) => JSX.Element;
  onSubmit: (data: TFormData) => void;
  schema: z.ZodType<TFormData>;
};

export function FormWrapper<TFormData extends FieldValues>({
  children,
  onSubmit,
  schema,
}: FormWrapperProps<TFormData>) {
  const { register, handleSubmit, formState } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({ register, formState })}
    </form>
  );
}
