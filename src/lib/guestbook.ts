import { useWallet } from "@/contexts/near";
import { functionCall, getProviderByNetwork, getSignerFromKeystore, view } from '@near-js/client';
import { BrowserLocalStorageKeyStore } from '@near-js/keystores-browser';
import { parseNearAmount } from "@near-js/utils";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface GuestBookMessage {
  premium: boolean;
  sender: string;
  text: string;
}

export const GUESTBOOK_CONTRACT = {
  mainnet: "hello.near-examples.near",
  testnet: "guestbook.near-examples.testnet"
}

export function useGuestBookMessages() {
  const { networkId } = useWallet();

  return useQuery({
    queryKey: ["guestbook-messages"],
    queryFn: async () => {
      const totalMessages = await view<number>({
        account: GUESTBOOK_CONTRACT[networkId],
        method: "total_messages",
        deps: { rpcProvider: getProviderByNetwork(networkId) },
      })
      const fromIndex = totalMessages >= 10 ? totalMessages - 10 : 0;
      const lastMessages = await view<GuestBookMessage[]>({
        account: GUESTBOOK_CONTRACT[networkId],
        method: "get_messages",
        args: { from_index: String(fromIndex), limit: "10" },
        deps: { rpcProvider: getProviderByNetwork(networkId) },
      });
      return lastMessages.reverse();
    }
  })
};

export function useWriteMessage() {
  const { signedAccountId, networkId } = useWallet();


  return useMutation({
    mutationFn: async ({ message, donationAmount }: { message: string; donationAmount?: string }) => {
      const keystore = new BrowserLocalStorageKeyStore(window.localStorage, "_meteor_wallet");
      const signer = getSignerFromKeystore(signedAccountId, networkId, keystore);
      const publicKey = await signer.getPublicKey();
      console.log(publicKey);
      try {
        const deposit = parseNearAmount(donationAmount);
        console.log("deposit ", BigInt(deposit!))
        console.log("networkId ", networkId)
        const result = await functionCall({
          sender: signedAccountId,
          receiver: GUESTBOOK_CONTRACT[networkId],
          deps: {
            signer,
            rpcProvider: getProviderByNetwork(networkId),
          },
          method: "add_message",
          args: { text: message },
          deposit: deposit ? BigInt(deposit) : undefined,
        });

        // Log result for debugging
        console.log("functionCall result:", result);

        return result; // Make sure the function returns a value/promise
      } catch (error) {
        console.error("Error in mutation:", error);
        throw error;
      }
    }
  })
}