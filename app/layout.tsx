import React from "react";
import "./globals.css";

import Navigation from "./components/Navigation";
import Context from "./context";
import { Box } from "@mui/material";
export const metadata = {
  title: "Prasad Avhad",
  description: "A portfolio website for Mr. Prasad Avhad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Context>
        <body className="dark:bg-slate-950 bg-slate-50 mt-14">
          <Navigation />
          {children}
        </body>
      </Context>
    </html>
  );
}
