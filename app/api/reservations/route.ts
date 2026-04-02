import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { reservationSchema } from "@/lib/validators";
import { sendReservationEmails } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid request payload",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const reservationId = randomUUID();

    await sendReservationEmails({
      reservationId,
      ...parsed.data,
    });

    return NextResponse.json(
      {
        ok: true,
        reservationId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/reservations failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
