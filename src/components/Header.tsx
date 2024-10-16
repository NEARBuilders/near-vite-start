import { Link } from "@tanstack/react-router";
import { useWallet } from "@/contexts/near";

export default function Header() {
  const { signedAccountId } = useWallet();

  return (
    <header className="bg-slate-600">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          📖 NEAR Guest Book
        </Link>
        <nav>
          {signedAccountId ? (
            <Link
              to={`/profile/${signedAccountId}`}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              {signedAccountId}
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Connect NEAR Account
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
