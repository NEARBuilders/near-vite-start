import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useWallet } from "../contexts/near";

export const Route = createFileRoute("/login")({
  component: LoginPage
});

export default function LoginPage() {
  const { wallet, signedAccountId } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (signedAccountId) {
      navigate({ to: "/" });
    }
  }, [signedAccountId]);

  const handleSignIn = () => {
    try {
      wallet!.signIn();
    } catch (e) {
      console.error("Wallet not configured properly");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <button
          onClick={handleSignIn}
          className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
