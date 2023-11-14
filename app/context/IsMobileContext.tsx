/**
 * This file contains the context manager whether the window is mobile or not
 */

"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext<boolean>(true);
export default function IsMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("resize", (ev) => {
      setIsMobile(window.matchMedia("(max-width:600px)").matches);
    });
    window.addEventListener("load", (ev) => {
      setIsMobile(window.matchMedia("(max-width:600px)").matches);
    });
  });
  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
}
