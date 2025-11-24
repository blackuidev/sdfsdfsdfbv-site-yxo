import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Retain existing state if any, or remove if not used.
  const path = window.location.pathname; // Basic client-side routing based on path

  let content;
  if (path === '/') {
    content = <Index />;
  } else {
    content = <NotFound />;
  }

  return (
    <>
      <AppHeader />
      <main className="flex-grow">
        {content}
      </main>
    </>
  );
}

export default App;
