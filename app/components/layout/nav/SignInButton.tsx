"use client";

import { useAuth } from "@/app/context/AuthContext";
import SignIn from "@/app/components/auth/SignIn";
import UserMenu from "@/app/components/auth/UserMenu";

export default function SignInButton() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // or a loading skeleton
  }

  if (user) {
    return <UserMenu user={user} />;
  }

  return <SignIn />;
}
