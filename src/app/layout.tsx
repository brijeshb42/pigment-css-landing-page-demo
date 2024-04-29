import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "@pigment-css/react/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emotion Demo",
  description:
    "A demo that showcases how to style your app with Pigment CSS in multiple ways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme")?.value || "dark";
  return (
    <html lang="en" className={theme}>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
