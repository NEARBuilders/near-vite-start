import reactLogo from "@/assets/react.svg";
import GuestbookSigner from "@/components/GuestbookSigner";
import Messages from "@/components/Messages";
import SignIn from "@/components/SignIn";
import { useWallet } from "@/contexts/near";
import { createFileRoute } from "@tanstack/react-router";
import nearLogo from "/near-logo.svg";
import viteLogo from "/vite.svg";

export const Route = createFileRoute("/")({
  component: HomePage
});

export default function HomePage() {
  const { signedAccountId } = useWallet();

  return (
    <>
      <div className="flex flex-row">
        <a href="https://dev.near.org" target="_blank">
          <img src={nearLogo} className="logo" alt="NEAR logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NEAR Vite + React</h1>
      <div className="container">
        <h1>📖 NEAR Guest Book</h1>
        {signedAccountId ? (
          <GuestbookSigner />
        ) : (
          <SignIn />
        )}
      </div>

      <Messages />
    </>
  );
}
