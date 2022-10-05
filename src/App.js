import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TransactionList from "./pages/TransactionList";
import TransactionDetail from "./pages/TransactionDetail";

import "./styles.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="transaction/:id" element={<TransactionDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
