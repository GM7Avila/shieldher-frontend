import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormWrapperProps<TFormData extends FieldValues> = {
  children: (props: {
    register: UseFormReturn<TFormData>["register"];
    formState: UseFormReturn<TFormData>["formState"];
    control: UseFormReturn<TFormData>["control"];
  }) => JSX.Element;
  onSubmit: (data: TFormData) => void;
  schema: z.ZodType<TFormData>;
};

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
