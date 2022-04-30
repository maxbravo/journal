import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JournalPage } from "../components/journal/JournalPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<JournalPage />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<JournalPage />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
};
