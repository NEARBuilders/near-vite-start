import { GuestBookMessage, useGuestBookMessages } from "@/lib/guestbook";
import { useTheme } from "@/components/theme-provider";

export default function Messages() {
  const { data, isLoading, isError } = useGuestBookMessages();
  const { theme } = useTheme();

  if (isLoading) return <div className="text-center">Loading messages...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading messages</div>
    );

  return (
    <div className="mx-auto w-full">
      <h2 className="mb-4 text-2xl font-bold">Messages</h2>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((message: GuestBookMessage, i: number) => (
            <div
              key={i}
              className={`rounded-md border border-opacity-30 bg-opacity-50 p-4 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} shadow-sm`}
            >
              <p className="mb-2">{message.text}</p>
              <div className="flex justify-between text-sm text-opacity-70">
                <span>{message.sender}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-opacity-70">
            No data yet. Be the first to sign the guestbook!
          </p>
        )}
      </div>
    </div>
  );
}
