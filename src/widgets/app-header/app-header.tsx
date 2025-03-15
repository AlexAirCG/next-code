import { Logo } from "./ui/logo";
import { Profile } from "./ui/profile";

export function AppHeader() {
  return (
    <div className="flex justify-between mb-6">
      <Logo />
      <Profile />
    </div>
  );
}
