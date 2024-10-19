import { useWallet } from "@/contexts/near";
import { getProviderByNetwork, view } from "@near-js/client";
import { parseNearAmount } from "@near-js/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NO_DEPOSIT, THIRTY_TGAS } from "../wallets/near-wallet";
import { queryClient } from "@/main";

export interface GuestBookMessage {
  premium: boolean;
  sender: string;
  text: string;
}

export const GUESTBOOK_CONTRACT = {
  mainnet: "hello.near-examples.near",
  testnet: "guestbook.near-examples.testnet"
};

export function useGuestBookMessages() {
  const { networkId } = useWallet();

  return useQuery({
    queryKey: ["guestbook-messages"],
    queryFn: async () => {
      const totalMessages = await view<number>({
        account: GUESTBOOK_CONTRACT[networkId],
        method: "total_messages",
        deps: { rpcProvider: getProviderByNetwork(networkId) }
      });
      const fromIndex = totalMessages >= 10 ? totalMessages - 10 : 0;
      const lastMessages = await view<GuestBookMessage[]>({
        account: GUESTBOOK_CONTRACT[networkId],
        method: "get_messages",
        args: { from_index: String(fromIndex), limit: "10" },
        deps: { rpcProvider: getProviderByNetwork(networkId) }
      });
      return lastMessages.reverse();
    }
  });
}

export function useWriteMessage() {
  const { networkId, wallet } = useWallet();

  return useMutation({
    onSuccess: () => {
      // Invalidate and refetch the "guestbook-messages" query
      queryClient.invalidateQueries({ queryKey: ["guestbook-messages"] });
    },
    mutationFn: async ({
      message,
      donationAmount
    }: {
      message: string;
      donationAmount?: string;
    }) => {
      try {
        const deposit = parseNearAmount(donationAmount);

        const result = wallet?.signAndSendTransaction({
          contractId: GUESTBOOK_CONTRACT[networkId],
          actions: [
            {
              type: "FunctionCall",
              params: {
                methodName: "add_message",
                args: { text: message },
                gas: THIRTY_TGAS,
                deposit: deposit ? deposit : NO_DEPOSIT
              }
            }
          ]
        });
        return result; // Make sure the function returns a value/promise
      } catch (error) {
        console.error("Error in mutation:", error);
        throw error;
      }
    }
  });
}
