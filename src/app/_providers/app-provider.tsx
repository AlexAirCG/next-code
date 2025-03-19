"use client";

import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { ComposeChildren } from "@/lib/react";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      {children}
    </ComposeChildren>
  );
}
