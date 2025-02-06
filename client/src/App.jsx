import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import TopParticipants from './components/TopParticipants';
// import { FileUpload } from './components/FileUpload';
import HomePage from './pages/HomePage'; // HomePage containing event list, top participants, etc.
// import { EventList } from './components/EventList';
import { EventPage } from './pages/EventPage';
import AddEventPage from './pages/AddEventPage';
import FileUploadPage from './pages/FileUploadPage'; // Import the new page
import Footer from "./components/Footer"; // Import Footer

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white container mx-auto px-4 py-6">
        {/* Routes component is already handled in main.jsx */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:eventName" element={<EventPage />} />
          <Route path="/add-event" element={<AddEventPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} /> {/* New Route */}
        </Routes>
      </div>
      <Footer /> {/* Add Footer Here */}
    </>
  );
}

export default App;
