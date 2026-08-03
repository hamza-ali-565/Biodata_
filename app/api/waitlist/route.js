import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// TODO: swap for a real ESP (Resend/Mailchimp) before scale — this JSON
// file is fine for low-volume waitlist capture but won't persist across
// deploys on ephemeral/serverless filesystems (e.g. Vercel).
const WAITLIST_FILE = path.join(process.cwd(), "data", "ai-generator-waitlist.json");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body?.email?.trim();
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await fs.promises.mkdir(path.dirname(WAITLIST_FILE), { recursive: true });

    let entries = [];
    try {
      const existing = await fs.promises.readFile(WAITLIST_FILE, "utf-8");
      entries = JSON.parse(existing);
    } catch {
      entries = [];
    }

    if (!entries.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
      entries.push({ email, timestamp: new Date().toISOString() });
      await fs.promises.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
