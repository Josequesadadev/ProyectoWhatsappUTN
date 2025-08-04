import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactListPage from './pages/ContactListPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactListPage />} />
        <Route path="/chat/:contactId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}


export default App;