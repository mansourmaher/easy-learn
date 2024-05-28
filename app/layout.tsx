import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "./api/uploadthing/core";
import { Confetti } from "@/components/providers/confetti-provider";
import { ToastProvider } from "@/components/providers/toaster-provider";
import Modal from "@/components/searchmodal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ease_learn",
  description: "Ease_learn",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

      <html lang="en">
        <body className={inter.className}>
          <Confetti />
          <ToastProvider />

          {children}
          <Modal/>
        </body>
      </html>
    </SessionProvider>
  );
}
