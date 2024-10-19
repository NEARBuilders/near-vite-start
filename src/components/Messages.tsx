import { GuestBookMessage, useGuestBookMessages } from "@/lib/guestbook";

export default function Messages() {
  const { data, isLoading, isError } = useGuestBookMessages();

  if (isLoading) return <div className="text-center">Loading messages...</div>;
  if (isError) return <div className="text-center text-red-500">Error loading messages</div>;

  return (
    <div className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((message: GuestBookMessage, i: number) => (
            <div key={i} className="bg-opacity-50 border border-opacity-30 rounded-md p-4 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <p className="mb-2">{message.text}</p>
              <div className="flex justify-between text-sm text-opacity-70">
                <span>{message.sender}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-opacity-70">No data yet. Be the first to sign the guestbook!</p>
        )}
      </div>
    </div>
  );
}
