import z from "zod";

export const upsertPatientSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
  email: z.string().email().trim().min(1, { message: "O email é obrigatório" }),
  phone_number: z.string().trim().min(1, { message: "O telefone é obrigatório" }),
  sex: z.enum(["male", "female"], {
    message: "O sexo é obrigatório",
  }),
});

export type UpsertPatientSSchema = z.infer<typeof upsertPatientSchema>;
