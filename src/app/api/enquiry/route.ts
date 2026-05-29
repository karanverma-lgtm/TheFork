import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, eventDate, guestCount, message } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const numericGuestCount = guestCount ? parseInt(guestCount, 10) : null;

    let enquiry;
    let savedToDb = false;

    try {
      // Try to save to database using Prisma
      enquiry = await prisma.enquiry.create({
        data: {
          name,
          email,
          phone,
          eventType,
          eventDate: eventDate || null,
          guestCount: numericGuestCount,
          message: message || "",
        },
      });
      savedToDb = true;
    } catch (dbError: any) {
      console.warn("Database save failed, falling back to local file log:", dbError.message);
      
      // Fallback: log to a file in the workspace
      const fallbackDir = path.join(process.cwd(), "logs");
      if (!fs.existsSync(fallbackDir)) {
        fs.mkdirSync(fallbackDir, { recursive: true });
      }
      
      const logFilePath = path.join(fallbackDir, "enquiries.json");
      const fallbackEnquiry = {
        id: `mock-${Date.now()}`,
        name,
        email,
        phone,
        eventType,
        eventDate,
        guestCount: numericGuestCount,
        message,
        createdAt: new Date().toISOString(),
      };

      let existingLogs = [];
      if (fs.existsSync(logFilePath)) {
        try {
          const fileData = fs.readFileSync(logFilePath, "utf8");
          existingLogs = JSON.parse(fileData);
        } catch (e) {
          existingLogs = [];
        }
      }

      existingLogs.push(fallbackEnquiry);
      fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2), "utf8");
      
      enquiry = fallbackEnquiry;
    }

    return NextResponse.json(
      {
        success: true,
        data: enquiry,
        savedToDb,
        message: savedToDb
          ? "Your enquiry has been successfully logged in the database."
          : "Your enquiry has been successfully saved to local logs (offline mode).",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
