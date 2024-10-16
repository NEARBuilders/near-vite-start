import { createFileRoute } from "@tanstack/react-router";
import { useWallet } from "../../contexts/near";

export const Route = createFileRoute("/profile/$accountId")({
  component: ProfilePage
});

export default function ProfilePage() {
  const { accountId } = Route.useParams();
  const { wallet, signedAccountId } = useWallet();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <h1>Hi {accountId}</h1>
        {accountId === signedAccountId ? (
          <button
            onClick={() => wallet!.signOut()}
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Out
          </button>
        ) : null}
      </div>
    </div>
  );
}
