import { createFileRoute } from "@tanstack/react-router";
import { useWallet } from "../../contexts/near";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/profile/$accountId")({
  component: ProfilePage
});

export default function ProfilePage() {
  // This page gets accountId from parameters
  const { accountId } = Route.useParams();
  const { wallet, signedAccountId } = useWallet();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <h2 className="text-2xl font-bold">{accountId}'s profile</h2>
        {accountId === signedAccountId ? (
          <Button
            className="w-full bg-blue-600 text-white transition-all hover:bg-blue-700 focus:scale-95"
            onClick={() => wallet!.signOut()}
          ></Button>
        ) : null}
      </div>
    </div>
  );
}
