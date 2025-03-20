"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export function SignInButton() {
  const handleSignOut = () => signIn();

  return (
    <Button
      className="flex items-center cursor-pointer hover:bg-amber-500 p-1 rounded"
      onClick={handleSignOut}
    >
      <LogIn className=" mr-2 h-4 w-4" /> Войти
    </Button>
  );
}
