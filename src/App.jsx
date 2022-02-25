import './App.css';
import { MoviesGrid } from './MoviesGrid';

//solo header
export function App() {
  return (
    <div>
      <header>
        <h1>Peliculas</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}


