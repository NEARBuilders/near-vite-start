import { useWallet } from "@/contexts/near";
import { useWriteMessage } from "@/lib/guestbook";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GuestbookSigner() {
  const { signedAccountId } = useWallet();

  const mutation = useWriteMessage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget
      .elements as HTMLFormControlsCollection & {
      fieldset: HTMLFieldSetElement;
      message: HTMLInputElement;
      donation: HTMLInputElement;
    };

    formElements.fieldset.disabled = true;

    // Mutate with the message and donation data
    mutation.mutate({
      message: formElements.message.value,
      donationAmount: formElements.donation.value
    });

    formElements.message.value = "";
    formElements.donation.value = "0";
    formElements.fieldset.disabled = false;
    formElements.message.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <fieldset id="fieldset" className="space-y-4">
        <h2 className="text-2xl font-bold">Guest Book</h2>
        <p className="text-opacity-70">
          Sign the guest book, {signedAccountId}!
        </p>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message:
          </label>
          <Input
            autoComplete="off"
            autoFocus
            id="message"
            name="message"
            required
          />
        </div>
        <div>
          <label htmlFor="donation" className="mb-1 block text-sm font-medium">
            Donation (optional):
          </label>
          <div className="flex rounded-md shadow-sm">
            <Input
              autoComplete="off"
              defaultValue={"0"}
              id="donation"
              name="donation"
              min="0"
              step="0.01"
              type="number"
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-opacity-30 bg-opacity-10 px-3 text-sm text-opacity-70">
              Ⓝ
            </span>
          </div>
        </div>
        <Button type="submit" className="w-full transition-all focus:scale-95">
          Sign Guest Book
        </Button>
      </fieldset>
    </form>
  );
}
