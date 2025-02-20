"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "An unknown error occurred.";
  if (error === "AccessDenied") {
    errorMessage = "Access denied. You do not have permission to sign in.";
  } else if (error === "Configuration") {
    errorMessage = "Server configuration error.";
  } else if (error === "Verification") {
    errorMessage = "The sign-in link is no longer valid.";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
