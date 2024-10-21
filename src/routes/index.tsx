import reactLogo from "@/assets/react.svg";
import GuestbookSigner from "@/components/guestbook/signer";
import Messages from "@/components/guestbook/messages";
import SignIn from "@/components/sign-in";
import { useWallet } from "@/contexts/near";
import { createFileRoute } from "@tanstack/react-router";
import nearLogo from "/near-logo.svg";
import nearLogoWhite from "/near-logo-white.svg";
import viteLogo from "/vite.svg";
import { useTheme } from "@/components/ui/theme-provider";

export const Route = createFileRoute("/")({
  component: HomePage
});

export default function HomePage() {
  const { signedAccountId } = useWallet();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <div className="mb-8 flex flex-row justify-center gap-8">
          <a
            href="https://dev.near.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "dark" ? nearLogoWhite : nearLogo}
              className="h-24 w-24"
              alt="NEAR logo"
            />
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

        <div className="rounded-lg p-6 shadow-md bg-card border">
          {signedAccountId ? <GuestbookSigner /> : <SignIn />}
        </div>

        <div className="mx-auto max-w-2xl pt-6">
          <Messages />
        </div>
      </div>
    </div>
  );
}
