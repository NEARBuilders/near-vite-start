import { useWallet } from "@/contexts/near";
import { useWriteMessage } from "@/lib/guestbook";
import { FormEvent } from "react";

export default function GuestbookSigner() {
  const { signedAccountId } = useWallet();

  const mutation = useWriteMessage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formElements = event.currentTarget.elements as HTMLFormControlsCollection & {
      fieldset: HTMLFieldSetElement;
      message: HTMLInputElement;
      donation: HTMLInputElement;
    };
  
    formElements.fieldset.disabled = true;
    
    // Mutate with the message and donation data
    mutation.mutate({
      message: formElements.message.value,
      donationAmount: formElements.donation.value,
    });
  
    formElements.message.value = "";
    formElements.donation.value = "0";
    formElements.fieldset.disabled = false;
    formElements.message.focus();
  };
  

  return (
    <form onSubmit={handleSubmit} className="rounded border p-4 shadow-sm">
      <fieldset id="fieldset">
        <h2 className="mb-4">Guest Book</h2>
        <p>Sign the guest book, {signedAccountId}!</p>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            name="message"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="donation" className="form-label">
            Donation (optional):
          </label>
          <div className="input-group">
            <input
              autoComplete="off"
              defaultValue={"0"}
              id="donation"
              name="donation"
              min="0"
              step="0.01"
              type="number"
              className="form-control"
            />
            <span className="input-group-text" title="NEAR Tokens">
              Ⓝ
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Guest Book
        </button>
      </fieldset>
    </form>
  );
}
