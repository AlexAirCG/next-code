"use client";

import { queryClient } from "@/components/api/query-client";
import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { ComposeChildren } from "@/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
