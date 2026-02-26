import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

export const metadata: Metadata = {
  title: "Habbit | Habit Tracking That Sticks",
  description:
    "Plan routines, keep streaks visible, and refine your weekly habits with Habbit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <header className="flex mx-auto items-center justify-between gap-3 px-4 py-4 max-w-5xl">
            <Link
              className="font-display text-2xl font-bold tracking-tight"
              href="/"
            >
              HABBIT
            </Link>
            <div className="flex items-center justify-end gap-3 p-4">
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost">Sign in</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
