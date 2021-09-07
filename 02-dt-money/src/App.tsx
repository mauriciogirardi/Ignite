import { useState } from "react";

import { Header } from "components/Header";
import { Dashboard } from "components/Dashboard";
import { NewTransactionModal } from "components/NewTransactionModal";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionsModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionsModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
    </>
  );
}

export default App;
