import { z } from 'zod';

const textField = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min)
    .max(max)
    .transform((value) => value.replace(/[\u0000-\u001f\u007f]/g, ''));

export const contactSchema = z.object({
  name: textField(2, 80),
  email: z.string().trim().email().max(160),
  subject: textField(3, 120),
  message: textField(10, 2000),
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactPayload = z.infer<typeof contactSchema>;
