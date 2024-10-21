import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useWallet } from "@/contexts/near";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const { signedAccountId } = useWallet();

  return (
    <header className="border shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-bolds text-lg sm:text-2xl">
          📖 NEAR Guest Book
        </Link>
        <nav>
          <ModeToggle />
          {signedAccountId ? (
            <Button asChild>
              <Link to={`/profile/${signedAccountId}`}>{signedAccountId}</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/login">Connect NEAR Account</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
