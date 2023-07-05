import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Header } from "./components/header";
import { QuizPage } from "./pages/quiz";
import CommunicationPage from "./pages/communication";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<div>404</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
