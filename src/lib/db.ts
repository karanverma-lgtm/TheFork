import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;

// Use a Proxy to defer PrismaClient instantiation until a database method is actually accessed.
// This prevents PrismaClient from attempting initialization during Next.js static build evaluation when DATABASE_URL is not present.
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    // Avoid returning the proxy if Next.js or React checks for a Promise-like object (e.g. .then)
    if (prop === "then") {
      return undefined;
    }

    if (!prismaInstance) {
      prismaInstance = new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
      });
    }

    const value = (prismaInstance as any)[prop];
    if (typeof value === "function") {
      return value.bind(prismaInstance);
    }
    return value;
  },
});
