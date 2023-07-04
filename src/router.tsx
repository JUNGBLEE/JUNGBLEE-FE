import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};
