import { ReactNode } from "react";
import { TransactionProvider } from "./useTransaction";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
