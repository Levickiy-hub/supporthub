import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
// import KnowledgeBasePage from '@/pages/KnowledgeBasePage';
// import ArticlePage from '@/pages/ArticlePage';
// import TicketPage from '@/pages/TicketPage';
// import LoginPage from '@/pages/LoginPage';
// import RegisterPage from '@/pages/RegisterPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/knowledge" element={<KnowledgeBasePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}