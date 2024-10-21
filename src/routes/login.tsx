import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useWallet } from "@/contexts/near";
import { Button } from "@/components/ui/button";

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
        <Button
          onClick={handleSignIn}
          className="w-full bg-blue-600 text-white transition-all hover:bg-blue-700 focus:scale-95"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
