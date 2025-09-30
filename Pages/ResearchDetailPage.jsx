import React, { useState } from 'react';
import ResearchArchivePage from './ResearchArchivePage';
import ResearchDetailPage from './ResearchDetailPage';

// Giả sử bạn đã có sẵn ResearchHubPage, ở đây mình demo đơn giản
const ResearchHubPage = ({ onNavigate }) => (
  <div className="bg-white min-h-screen flex flex-col items-center justify-center p-12">
    <h1 className="text-4xl font-extrabold mb-6">Trung tâm Research</h1>
    <p className="text-gray-600 mb-8">Chọn mục để xem chi tiết.</p>
    <button
      onClick={() => onNavigate('researchArchive')}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Xem Lưu trữ Bản tin
    </button>
  </div>
);

function App() {
  const [page, setPage] = useState('researchHub');
  const [pageParams, setPageParams] = useState({});

  const handleNavigate = (nextPage, params = {}) => {
    setPage(nextPage);
    setPageParams(params);
  };

  if (page === 'researchArchive') {
    return <ResearchArchivePage onNavigate={handleNavigate} />;
  }

  if (page === 'newsDetail') {
    return <ResearchDetailPage onNavigate={handleNavigate} newsId={pageParams.newsId} />;
  }

  return <ResearchHubPage onNavigate={handleNavigate} />;
}

export default App;
