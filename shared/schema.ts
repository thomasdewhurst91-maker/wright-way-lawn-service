import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(1, "Address is required"),
  service: z.enum(["Lawn Mowing", "Garden Maintenance", "Commercial Service", "Other"]),
  message: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
