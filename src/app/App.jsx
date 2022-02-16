import './App.scss';
import { Header } from './shared/Header';
import { Footer } from './shared/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <div className="container">content here</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
