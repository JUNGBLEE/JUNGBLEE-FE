import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Header } from "./components/header";
import { QuizPage } from "./pages/quiz";
import CommunicationPage from "./pages/communication";
import { CommunicationDetailPage } from "./pages/communication/detail";
import QuizDetailPage from "./pages/quiz/detail";
import MyPage from "./pages/mypage";
import { HomePage } from "./pages/HomePage";
import { MapPage } from "./pages/map";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<div>404</div>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/quiz">
          <Route index element={<QuizPage />} />
          <Route path=":id" element={<QuizDetailPage />} />
        </Route>
        <Route path="/communication">
          <Route index element={<CommunicationPage />} />
          <Route path=":id" element={<CommunicationDetailPage />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
