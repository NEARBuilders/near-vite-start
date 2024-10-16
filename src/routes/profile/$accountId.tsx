import { createFileRoute } from "@tanstack/react-router";
import { useWallet } from "../../contexts/near";

export const Route = createFileRoute("/profile/$accountId")({
  component: ProfilePage
});

export default function ProfilePage() {
  const { accountId } = Route.useParams();
  const { wallet, signedAccountId } = useWallet();

  return (
    <>
      <h1>Hi {accountId}</h1>
      {accountId === signedAccountId ? (
        <button onClick={() => wallet!.signOut()}>signOut</button>
      ) : null}
    </>
  );
}
