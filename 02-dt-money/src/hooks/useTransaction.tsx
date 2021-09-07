import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "services/api";
import utils from "utils";

interface Transaction {
  id: string;
  createdAt: string;
  amount: number;
  title: string;
  type: string;
  category: string;
}

type TransactionInput = Omit<Transaction, "id">;

interface TransactionContextProps {
  transactions: Transaction[];
  isLoading: boolean;
  createTransaction: (transaction: TransactionInput) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function getTransaction() {
      try {
        setIsLoading(true);
        const { data } = await api.get("/transactions");
        const transaction = data.transactions.map((t: Transaction) => ({
          ...t,
          createdAt: utils.formattedDate(t.createdAt),
        }));

        setTransactions(transaction);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }

    getTransaction();
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    try {
      setIsLoading(true);

      const { data } = await api.post("/transactions", transaction);

      setTransactions([...transactions, data.transaction]);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  }

  return (
    <TransactionContext.Provider
      value={{ isLoading, transactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction(): TransactionContextProps {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }

  return context;
}
