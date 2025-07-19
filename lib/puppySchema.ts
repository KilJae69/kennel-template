import { z } from "zod";

export const puppyApplicationSchema = z.object({
  // Step 1 - Welcome (no fields, just information)

  // Step 2 - Applicant Information
  fullName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required"),
    zip: z.string().min(5, "ZIP code is required"),
    country: z.string().min(1, "Country is required"),
  }),
  age: z
    .string()
    .min(1, "Age is required")
    .regex(/^[0-9]+$/, "Must be a number")
    .refine((val) => Number(val) >= 18, "You must be at least 18 years old")
    .refine((val) => Number(val) <= 120, "Maximum age is 120"),

  // Step 3 - Household Information
  homeType: z
    .string()
    .min(1, "Please select a home type")
    .refine((val) => ["House", "Apartment", "Condo", "Other"].includes(val), {
      message: "Please select a valid home type",
    }),
  ownOrRent: z
    .string()
    .min(1, "Please specify if you own or rent")
    .refine((val) => ["Own", "Rent"].includes(val), {
      message: "Please select a valid option",
    }),
  hasFence: z
    .string()
    .min(1, "Please specify if you have a fence")
    .refine((val) => ["Yes", "No"].includes(val), {
      message: "Please select a valid option",
    }),
  fenceHeight: z.string().optional(),
  adultsInHome: z
    .string()
    .min(1, "Required")
    .regex(/^[0-9]+$/, "Must be a number")
    .refine((val) => Number(val) >= 1, "At least one adult required"),
  childrenInHome: z
    .string()
    .regex(/^[0-9]*$/, "Must be a number")
    .transform((val) => (val === "" ? "0" : val)),

  // Step 4 - Pet Experience
//   hadPetBefore: z
//     .string()
//     .min(1, "Please specify if you had a pet before.")
//     .refine((val) => ["Yes", "No"].includes(val), {
//       message: "Please select a valid option",
//     }),

//   // These fields will be conditionally validated based on hadPetBefore
//   currentPets: z.string().optional(),
//   previousPetsExperience: z.string().optional(), 
//   hasTrainingExperience: z.string().optional(),
//   trainingExperience: z.string().optional(),

//   vetInfo: z
//     .object({
//       name: z.string().optional(),
//       phone: z.string().optional(),
//     })
//     .optional(),

  // Step 5 - Puppy Preferences
  puppyPurpose: z.string()
    .min(1, "Please let us know the main purpose for adoption?")
    .refine((val) => ["Companion", "Show", "Breeding", "Service", "Other"].includes(val), {
      message: "Please select a valid option",
    }),
  preferredSex: z.string()
    .min(1, "Please let us know if you have a preference regarding puppy gender")
    .refine((val) => ["Male", "Female", "No Preference"].includes(val), {
      message: "Please select a valid option",
    }),
  preferredColor: z.string().optional(),
  preferredTemperament: z.string().optional(),
  plannedTraining: z.string().min(1, "Please describe your training plans"),

  // Step 6 - Commitment
//   dailyAloneTime: z.string().min(1, "Please estimate daily alone time"),
//   exercisePlan: z.string().min(1, "Please describe exercise plans"),
//   financialPreparedness: z
//     .string()
//     .min(1, "Please confirm financial preparedness"),
  agreement: z.boolean().refine((val) => val, "You must agree to the terms"),
})

export type PuppyApplication = z.infer<typeof puppyApplicationSchema>;