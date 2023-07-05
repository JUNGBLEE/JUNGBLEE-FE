import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Header } from "./components/header";
import { QuizPage } from "./pages/quiz";
import CommunicationPage from "./pages/communication";
import { CommunicationDetailPage } from "./pages/communication/detail";
import QuizDetailPage from "./pages/quiz/detail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<div>404</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/quiz">
          <Route index element={<QuizPage />} />
          <Route path=":id" element={<QuizDetailPage />} />
        </Route>
        <Route path="/communication">
          <Route index element={<CommunicationPage />} />
          <Route path=":id" element={<CommunicationDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
