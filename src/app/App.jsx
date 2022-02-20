import './App.scss';
import { Header } from './shared/Header';
import { Footer } from './shared/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotesListPage } from './pages/NotesListPage';
import { NotePage } from './pages/NotePage';
import { EditPage } from './pages/EditPage';

function App() {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NotesListPage />} />
              <Route path="/note/:id" element={<NotePage />} />
              <Route path="/edit/:id" element={<EditPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
