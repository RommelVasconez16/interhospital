import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import ClientCacheGuard from "./components/clientcacheguard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const APP_VERSION = "2026-01-06";

export const metadata: Metadata = {
  title: "InterHospital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body data-version={APP_VERSION} className={inter.className}>
        <ClientCacheGuard />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
