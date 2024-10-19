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
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <div className="mb-8 flex flex-row justify-center gap-8">
          <a
            href="https://dev.near.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nearLogo} className="h-24 w-24" alt="NEAR logo" />
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-24 w-24" alt="React logo" />
          </a>
        </div>
        <h1 className="my-8 text-center text-3xl font-bold">
          NEAR + Vite + React
        </h1>

        <div className="rounded-lg bg-gray-700 p-6 text-gray-100 shadow-md">
          {signedAccountId ? <GuestbookSigner /> : <SignIn />}
        </div>

        <div className="mx-auto max-w-2xl pt-6">
          <Messages />
        </div>
      </div>
    </div>
  );
}
