import { GuestBookMessage, useGuestBookMessages } from "@/lib/guestbook";

export default function Messages() {
  const { data, isLoading, isError, error } = useGuestBookMessages();

  if (isLoading) {
    return (
      <div className="container text-center my-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading messages...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container text-center my-4">
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {error.message || "Failed to load messages."}
        </div>
      </div>
    );
  }
  

  return (
    <div className="container">
      <h2 className="my-4">Messages</h2>
      {data && data.length > 0 ? (
        data.map((message: GuestBookMessage, i: number) => (
          <div
            key={i}
            className={`card mb-3 ${message.premium ? "border-primary" : ""}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                <strong>{message.sender}</strong>
                {message.premium && (
                  <span className="badge bg-primary ms-2">Premium</span>
                )}
              </h5>
              <p className="card-text">{message.text}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
}
