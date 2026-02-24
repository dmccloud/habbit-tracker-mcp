import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
