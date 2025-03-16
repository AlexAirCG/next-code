"use client";

import { ComposeChildren } from "@/lib/react";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <ComposeChildren>{children}</ComposeChildren>;
}
