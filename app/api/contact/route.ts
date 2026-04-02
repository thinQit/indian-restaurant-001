import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { contactSchema } from "@/lib/validators";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = contactSchema.safeParse(body);

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

    const messageId = randomUUID();

    await sendContactEmail({
      messageId,
      ...parsed.data,
    });

    return NextResponse.json(
      {
        ok: true,
        messageId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
