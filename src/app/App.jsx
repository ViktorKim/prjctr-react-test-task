import './App.scss';
import { Header } from './shared/Header';
import { Footer } from './shared/Footer';
import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';
import { NotesListPage } from './pages/notes-list/NotesListPage';
import { NotePage } from './pages/NotePage';
import { EditPage } from './pages/EditPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <main className="flex-shrink-0 pt-3">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NotesListPage />} />
              <Route path="/notes" element={<NotesListPage />} />
              <Route path="/notes/:id" element={<NotePage />} />
              <Route path="/notes/:id/edit" element={<EditPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
