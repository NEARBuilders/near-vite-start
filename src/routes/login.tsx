import { createFileRoute } from "@tanstack/react-router";
import { useWallet } from "../contexts/near";

export const Route = createFileRoute("/login")({
  component: LoginPage
});

export default function LoginPage() {
  const { wallet } = useWallet();

  return (
    <>
      <button onClick={() => wallet!.signIn()}>signIn</button>
    </>
  );
}
