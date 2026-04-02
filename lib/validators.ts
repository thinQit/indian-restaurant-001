import { z } from "zod";

export const reservationTimeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
] as const;

export const reservationSchema = z.object({
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z.enum(reservationTimeSlots),
  partySize: z.number().int().min(1).max(10),
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(30),
  notes: z.string().max(2000).optional(),
});

export const contactTopics = [
  "Reservations",
  "Private Dining",
  "Dietary",
  "Press",
  "Feedback",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(30).optional(),
  topic: z.enum(contactTopics),
  message: z.string().min(10).max(5000),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
