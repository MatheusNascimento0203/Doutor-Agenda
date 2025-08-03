import z from "zod";

export const upsertDoctorSchema = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
    specialty: z
      .string()
      .trim()
      .min(1, { message: "A especialidade é obrigatória" }),
    appoitmentPriceIncents: z
      .number()
      .min(1, { message: "O valor da consulta é obrigatório" }),
    availableFromWeekDay: z
      .number()
      .min(0)
      .max(6),
    availableToWeekDay: z
      .number()
      .min(0)
      .max(6),
    availableFromTime: z
      .string()
      .trim()
      .min(1, { message: "O horário de inicio é obrigatório" }),
    availableToTime: z
      .string()
      .trim()
      .min(1, { message: "O horário de final é obrigatório" }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message:
        "O horário de inicio não pode ser anterior ao horário de término",
      path: ["availableFromTime"],
    },
  );

export type UpsertDoctorSchema = z.infer<typeof upsertDoctorSchema>;
