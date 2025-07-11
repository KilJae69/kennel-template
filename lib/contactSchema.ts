import { z } from "zod";

export const contactFormSchema = () =>
  z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "This field is required." })
      .max(100, { message: "Name must be less than 100 characters." })
      .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
        message: "Your name must only contain letters.",
      }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: "This field is required." })
      .max(100, { message: "Last name must be less than 100 characters." })
      .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
        message: "Your last name must only contain letters.",
      }),

    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address." })
      .min(1, { message: "This field is required." })
      .max(100, { message: "Email must be less than 100 characters." }),

      phone: z
      .string()
      .trim()
      .max(20, { message: "Phone number must be less than 20 characters." })
      .optional()
      .refine((value) => !value || /^[\d\s()+-]+$/.test(value), {
        message: "Invalid phone number format.",
      }),

    message: z
      .string()
      .trim()
      .min(1, { message: "This field is required." })
      .max(1000, { message: "Message must be less than 1000 characters." }),
  });

export type TContactFormSchema = z.infer<ReturnType<typeof contactFormSchema>>;