import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">SoftBlog 部落格首頁</h1>
      <ul className="space-y-4">
        <li className="bg-white p-6 rounded-2xl shadow">
          <Link to="/post/1" className="text-xl text-blue-600 font-medium hover:underline">
            柔和設計的魅力
          </Link>
          <p className="text-gray-500 mt-2">
            了解如何運用色彩與圓角讓網站更具親和力。
          </p>
        </li>
        <li className="bg-white p-6 rounded-2xl shadow">
          <Link to="/post/2" className="text-xl text-blue-600 font-medium hover:underline">
            前端開發新手指南
          </Link>
          <p className="text-gray-500 mt-2">
            從 HTML、CSS 到 React 的學習路線。
          </p>
        </li>
      </ul>
    </div>
  );
}

function Post({ id }) {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">文章 #{id}</h2>
      <p className="text-gray-600">這是文章內容範例，可以根據 id 顯示不同內容。</p>
      <Link to="/" className="block mt-6 text-blue-500 hover:underline">← 返回首頁</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/softblog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;