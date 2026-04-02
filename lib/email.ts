type ReservationEmailPayload = {
  reservationId: string;
  date: string;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  notes?: string;
};

type ContactEmailPayload = {
  messageId: string;
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function sendReservationEmails(
  payload: ReservationEmailPayload
): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER ?? "log";

  if (provider === "log") {
    console.info("[reservation-confirmation]", payload);
    return;
  }

  const hostStandEmail = getRequiredEnv("HOST_STAND_EMAIL");
  const fromEmail = getRequiredEnv("EMAIL_FROM");

  console.info("[reservation-confirmation]", {
    fromEmail,
    hostStandEmail,
    toGuest: payload.email,
    payload,
  });
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER ?? "log";

  if (provider === "log") {
    console.info("[contact-inquiry]", payload);
    return;
  }

  const fromEmail = getRequiredEnv("EMAIL_FROM");
  const reservationsInbox = process.env.CONTACT_RESERVATIONS_EMAIL;
  const privateDiningInbox = process.env.CONTACT_PRIVATE_DINING_EMAIL;
  const dietaryInbox = process.env.CONTACT_DIETARY_EMAIL;
  const pressInbox = process.env.CONTACT_PRESS_EMAIL;
  const feedbackInbox = process.env.CONTACT_FEEDBACK_EMAIL;
  const fallbackInbox = getRequiredEnv("HOST_STAND_EMAIL");

  const topicToInbox: Record<string, string | undefined> = {
    Reservations: reservationsInbox,
    "Private Dining": privateDiningInbox,
    Dietary: dietaryInbox,
    Press: pressInbox,
    Feedback: feedbackInbox,
  };

  const routedInbox = topicToInbox[payload.topic] ?? fallbackInbox;

  console.info("[contact-inquiry]", {
    fromEmail,
    to: routedInbox,
    replyTo: payload.email,
    payload,
  });
}
