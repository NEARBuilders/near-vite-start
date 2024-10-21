import { useWallet } from "@/contexts/near";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  const { signedAccountId } = useWallet();

  return (
    <header className="bg-slate-600">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold text-white sm:text-2xl">
          📖 NEAR Guest Book
        </Link>
        <nav>
          <ModeToggle />
          {signedAccountId ? (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              asChild
            >
              <Link to={`/profile/${signedAccountId}`}>{signedAccountId}</Link>
            </Button>
          ) : (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              asChild
            >
              <Link to="/login">Connect NEAR Account</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
